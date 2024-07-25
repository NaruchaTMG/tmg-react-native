import {
  ImageBackground, Pressable,
  ScrollView,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomTextInput} from '../../components/text/CustomTextInput.tsx';

function AuthScreen() {
  const insets = useSafeAreaInsets()
  return (
      <ScrollView style={[styles.container]}>
        <ImageBackground
            style={[styles.bgContainer, {paddingTop: insets.top}]}
            source={require('../../assets/images/bg-login.jpg')}
            resizeMode={"cover"}
        >
          <View style={[styles.container, {alignItems: 'flex-end', paddingHorizontal: 20}]}>
            <TouchableOpacity>
              <Text style={[styles.notosanSemiBold, {fontSize: 16, color: "white"}]}>Skip</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.notosanSemiBold, {fontSize: 24, color: "white", alignItems: "flex-end", marginLeft: 20}]}>
            {
              "ยินดีต้อนรับ\nเข้าสู่ระบบสมาชิก M Card"
            }
          </Text>
        </ImageBackground>
        <View style={styles.formContainer}>
          <CustomTextInput placeholder={"Id card number*"} />
          <CustomTextInput placeholder={"Telephone number*"} />
          <CustomTextInput placeholder={"Refer code*"} />
        </View>
        <View style={[styles.container, {paddingHorizontal: 20}]}>
          <Pressable style={styles.buttonContainer}>
            <Text style={[styles.notosanBold, {color: "white", fontSize: 16}]}>
              {"Submit"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
  )
}

export default AuthScreen
