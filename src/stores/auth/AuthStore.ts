import {action, observable} from 'mobx';
import {Store} from '../Store.ts';

export class AuthStore {
  store?: Store
  @observable accessor conditions: ConditionProps = {
    p1: false,
    p2: false,
    p3: false,
  }
  @observable accessor form: FormProps = {
    idCard: "",
    telNo: "",
    refCode: "",
  }
  @observable accessor formErrors: FormErrorsProps  = {
    idCardError: "",
    telNoError: "",
    refCodeError: "",
  }

  constructor(store: Store) {
    this.store = store
  }

  @action
  setForm(tag: string, val: string) {
    const form = this.form
    this.form = {
      ...form,
      [tag]: val,
    }
  }

  @action
  setConditions(tag: string, val: boolean) {
    const conditions = this.conditions
    this.conditions = {
      ...conditions,
      [tag]: !val,
    }
  }

  @action
  validateForm() {
    const form = {
      ...this.form,
      ...this.conditions
    }
    console.log(`Form data ${JSON.stringify(form, undefined, 2)}`)
    this.formErrors = ({
      idCardError: this.form?.idCard === "" ? "required" : "",
      telNoError: this.form?.telNo === "" ? "required" : "",
      refCodeError: "",
    })
  }
}
