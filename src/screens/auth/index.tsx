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

type ConditionProps = {
  p1: boolean;
  p2: boolean;
  p3: boolean;
}

function AuthScreen() {
  const [conditions, setConditions] = useState<ConditionProps | undefined>(
      undefined);
  const insets = useSafeAreaInsets();

  function onPressCondition(tag: string, val: boolean) {
    setConditions(prevState =>
        prevState ? ({
          ...prevState,
          [tag]: !val,
        }) : ({
          p1: tag === "p1",
          p2: tag === "p2",
          p3: tag === "p3",
        }));
  }

  return (
      <ScrollView
          style={[styles.container]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: insets.bottom}}>
        <ImageBackground
            style={[styles.bgContainer, {paddingTop: insets.top}]}
            source={require('../../assets/images/bg-login.jpg')}
            resizeMode={'contain'}
        >
          <View style={[
            styles.container,
            {alignItems: 'flex-end', paddingHorizontal: 20}]}>
            <TouchableOpacity>
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
              padding: 20,
            }]}>
            {
              'ยินดีต้อนรับ\nเข้าสู่ระบบสมาชิก M Card'
            }
          </Text>
        </ImageBackground>
        <View style={styles.formContainer}>
          <CustomTextInput placeholder={'Id card number*'}/>
          <CustomTextInput placeholder={'Telephone number*'}/>
          <CustomTextInput placeholder={'Refer code*'}/>
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
          <MainButton />
        </View>
      </ScrollView>
  );
}

export default AuthScreen;
