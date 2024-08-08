import {action, observable} from 'mobx';
import {Store} from '../Store.ts';
import DeviceInfo from 'react-native-device-info';
import {getJwtToken} from '../../services/auth/Auth.ts';
import {JWTRequest, JWTResponse} from '../../services/auth/interface.ts';

export class AuthStore {
  store?: Store;
  jwt?: string;
  @observable accessor conditions: ConditionProps = {
    p1: false,
    p2: false,
    p3: false,
  };
  @observable accessor form: FormProps = {
    idCard: '',
    telNo: '',
    refCode: '',
  };
  @observable accessor formErrors: FormErrorsProps = {
    idCardError: '',
    telNoError: '',
    refCodeError: '',
  };

  constructor(store: Store) {
    this.store = store;
  }

  @action
  async getJWT() {
    this.jwt = undefined
    const deviceId = await DeviceInfo.getUniqueId();
    const params: JWTRequest = {
      login_token: '',
      device_id: deviceId,
    };
    const result: any = await getJwtToken(params);

    switch (result.status) {
      case 200:
        console.log('getJWT status ====> 200')
        const data: JWTResponse = result.data;
        this.jwt = data.jwt
        console.log('getJWT jwt ====> ' + this.jwt)
        break;
      case 401:
        break;
      default:
        break;
    }
  }

  @action
  setForm(tag: string, val: string) {
    const form = this.form;
    this.form = {
      ...form,
      [tag]: val,
    };
  }

  @action
  setConditions(tag: string, val: boolean) {
    const conditions = this.conditions;
    this.conditions = {
      ...conditions,
      [tag]: !val,
    };
  }

  @action
  validateForm() {
    const form = {
      ...this.form,
      ...this.conditions,
    };
    console.log(`Form data ${JSON.stringify(form, undefined, 2)}`);
    this.formErrors = ({
      idCardError: this.form?.idCard === '' ? 'required' : '',
      telNoError: this.form?.telNo === '' ? 'required' : '',
      refCodeError: '',
    });
  }
}
