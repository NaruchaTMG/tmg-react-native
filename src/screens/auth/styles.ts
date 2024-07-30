import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgContainer: {
    width: '100%',
    height: undefined,
    aspectRatio: 2660 / 2261,
    justifyContent: 'space-between',
  },
  formContainer: {
    width: '100%',
    height: undefined,
    padding: 20,
    gap: 20,
  },
  textInput: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  checkboxContainer: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10
  },
  notosanRegular: {
    fontFamily: 'NotoSansThai-Regular',
  },
  notosanMedium: {
    fontFamily: 'NotoSansThai-Medium',
  },
  notosanSemiBold: {
    fontFamily: 'NotoSansThai-SemiBold',
  },
  notosanBold: {
    fontFamily: 'NotoSansThai-Bold',
  },
});
