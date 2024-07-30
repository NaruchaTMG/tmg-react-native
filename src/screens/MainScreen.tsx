import {Text, View} from 'react-native';
import {globalStyles} from '../GlobalStyles.ts';

export default function MainScreen() {
  return (
      <View style={globalStyles.containerCenter}>
        <Text style={[globalStyles.notosanBold, {fontSize: 24}]}>
          Welcome to arena of valor
        </Text>
      </View>
  )
}
