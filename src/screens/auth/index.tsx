import {
  ImageBackground, Pressable,
  ScrollView,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomTextInput} from '../../components/text/input';
import MainButton from '../../components/buttons/main';
import CustomCheckBox from '../../components/buttons/checkbox';
import {useState} from 'react';
import {p1, p2, p3} from '../../Constants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../StackParamList.ts';

type ConditionProps = {
  p1: boolean;
  p2: boolean;
  p3: boolean;
}

type FormProps = {
  idCard: string;
  telNo: string;
  refCode: string;
}

type FormErrorsProps = {
  idCardError: string;
  telNoError: string;
  refCodeError: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'AuthScreen'>

function AuthScreen({navigation}: Props) {
  const [conditions, setConditions] = useState<ConditionProps | undefined>(
      undefined);
  const [form, setForm] = useState<FormProps>({
    idCard: "",
    telNo: "",
    refCode: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrorsProps>({
    idCardError: "",
    telNoError: "",
    refCodeError: "",
  });
  const insets = useSafeAreaInsets();

  function onPressCondition(tag: string, val: boolean) {
    setConditions(prevState =>
        prevState ? ({
          ...prevState,
          [tag]: !val,
        }) : ({
          p1: tag === 'p1',
          p2: tag === 'p2',
          p3: tag === 'p3',
        }));
  }

  function onChangeValue(tag: string, val: string) {
    setForm(prevState =>
        prevState ? ({
          ...prevState,
          [tag]: val,
        }) : ({
          idCard: tag === "idCard" ? val : "",
          telNo: tag === "telNo" ? val : "",
          refCode: tag === "refCode" ? val : "",
        }));
  }

  function validateForm() {
    setFormErrors({
      idCardError: form.idCard === "" ? "required" : "",
      telNoError: form.telNo === "" ? "required" : "",
      refCodeError: "",
    })
  }

  return (
      <ScrollView
          style={[styles.container]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: insets.bottom + 40}}>
        <ImageBackground
            style={[styles.bgContainer, {paddingTop: insets.top}]}
            source={require('../../assets/images/bg-login.jpg')}
            resizeMode={'contain'}
        >
          <View style={[
            styles.container,
            {alignItems: 'flex-end', paddingHorizontal: 20}]}>
            <TouchableOpacity onPress={() => navigation.navigate("MainScreen")}>
              <Text style={[
                styles.notosanSemiBold,
                {fontSize: 16, color: 'white'}]}>Skip</Text>
            </TouchableOpacity>
          </View>
          <Text style={[
            styles.notosanSemiBold,
            {
              fontSize: 24,
              color: 'white',
              alignItems: 'flex-end',
              paddingHorizontal: 20,
              paddingVertical: 15,
            }]}>
            {
              'ยินดีต้อนรับ\nเข้าสู่ระบบสมาชิก M Card'
            }
          </Text>
        </ImageBackground>
        <View style={styles.formContainer}>
          <CustomTextInput tag={'idCard'}
                           placeholder={'Id card number*'}
                           isError={formErrors.idCardError !== ""}
                           errorMessage={formErrors.idCardError}
                           onChangeText={onChangeValue}/>
          <CustomTextInput tag={'telNo'}
                           placeholder={'Telephone number*'}
                           isError={formErrors.telNoError !== ""}
                           errorMessage={formErrors.telNoError}
                           onChangeText={onChangeValue}/>
          <CustomTextInput tag={'refCode'}
                           placeholder={'Refer code optional!'}
                           // isError={form.refCode === ""}
                           onChangeText={onChangeValue}/>
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox tag={'p1'}
                          isChecked={conditions?.p1 || false}
                          text={p1}
                          onPress={(tag: string, val) => {
                            onPressCondition(tag, val);
                          }}/>
          <CustomCheckBox tag={'p2'}
                          isChecked={conditions?.p2 || false}
                          text={p2}
                          onPress={(tag: string, val) => {
                            onPressCondition(tag, val);
                          }}/>
          <CustomCheckBox tag={'p3'}
                          isChecked={conditions?.p3 || false}
                          text={p3}
                          onPress={(tag: string, val) => {
                            onPressCondition(tag, val);
                          }}/>
        </View>
        <View
            style={[styles.container, {paddingHorizontal: 20, paddingTop: 20}]}>
          <MainButton isActive={conditions?.p1 || false} textButton={'Submit'}
                      onPress={() => {
                        validateForm()
                        if(form && conditions) {
                          const f = form
                          const c = conditions
                          const data = {
                            ...f,
                            ...c
                          }
                          console.log(data)
                        }
                      }}/>
        </View>
      </ScrollView>
  );
}

export default AuthScreen;
