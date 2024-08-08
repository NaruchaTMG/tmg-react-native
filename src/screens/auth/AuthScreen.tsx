import {
  Button,
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
import {p1, p2, p3} from '../../Constants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../StackParamList.ts';
import CustomText from '../../components/text/custom/CustomText.tsx';
import {observer} from 'mobx-react';
import {useStore} from '../../stores/Store.ts';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {request} from '../../services/Client.ts';
import {AUTH, USERS} from '../../services/Endpoints.ts';
import DeviceInfo from 'react-native-device-info';

type Props = NativeStackScreenProps<RootStackParamList, 'AuthScreen'>

function AuthScreen({navigation}: Props) {
  const insets = useSafeAreaInsets();
  const {authStore} = useStore();
  const [id, setId] = useState<number>(10);
  console.log(`id ===> ${id}`)

  async function getUsers(id: number) {
    await request('get', USERS(id))
  }

  useEffect(() => {
    // getJWT()
  }, []);

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
            <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
              <Text style={[
                styles.notosanSemiBold,
                {fontSize: 16, color: 'white'}]}>Skip</Text>
            </TouchableOpacity>
          </View>
          {/*<CustomText fontSize={26} text={'ยินดีต้อนรับ\nเข้าสู่ระบบสมาชิก M Card'} />*/}
          <CustomText
              fontFamily={'Medium'}
              customStyle={{paddingHorizontal: 20, paddingBottom: 15}}
              fontSize={26}>
            {
              'ยินดีต้อนรับ\nเข้าสู่ระบบสมาชิก M Card'
            }
          </CustomText>
        </ImageBackground>
        <Button title={'Random id'}
                onPress={() => setId(Math.ceil(Math.random() * 100))}/>
        <View style={styles.formContainer}>
          <CustomTextInput tag={'idCard'}
                           placeholder={'Id card number*'}
                           isError={authStore?.formErrors?.idCardError !== ''}
                           errorMessage={authStore?.formErrors?.idCardError}
                           onChangeText={(tag, val) => authStore?.setForm(tag,
                               val)}/>
          <CustomTextInput tag={'telNo'}
                           placeholder={'Telephone number*'}
                           isError={authStore?.formErrors?.telNoError !== ''}
                           errorMessage={authStore?.formErrors?.telNoError}
                           onChangeText={(tag, val) => authStore?.setForm(tag,
                               val)}/>
          <CustomTextInput tag={'refCode'}
                           placeholder={'Refer code optional!'}
                           onChangeText={(tag, val) => authStore?.setForm(tag,
                               val)}/>
        </View>
        <View style={styles.checkboxContainer}>
          <CustomCheckBox tag={'p1'}
                          isChecked={authStore?.conditions?.p1 || false}
                          text={p1}
                          onPress={(tag: string, val) => {
                            authStore?.setConditions(tag, val);
                          }}/>
          <CustomCheckBox tag={'p2'}
                          isChecked={authStore?.conditions?.p2 || false}
                          text={p2}
                          onPress={(tag: string, val) => {
                            authStore?.setConditions(tag, val);
                          }}/>
          <CustomCheckBox tag={'p3'}
                          isChecked={authStore?.conditions?.p3 || false}
                          text={p3}
                          onPress={(tag: string, val) => {
                            authStore?.setConditions(tag, val);
                          }}/>
        </View>
        <View
            style={[styles.container, {paddingHorizontal: 20, paddingTop: 20}]}>
          <MainButton isActive={authStore?.conditions?.p1 || false}
                      textButton={'Submit'}
                      onPress={() => {
                        authStore?.validateForm();
                      }}/>
        </View>
      </ScrollView>
  );
}

export default observer(AuthScreen);
