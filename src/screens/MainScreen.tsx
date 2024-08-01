import {Text, View} from 'react-native';
import {globalStyles} from '../GlobalStyles.ts';
import {useStore} from '../stores';

function MainScreen() {
  const store = useStore()
  return (
      <View style={globalStyles.containerCenter}>
        <Text style={[globalStyles.notosanBold, {fontSize: 24}]}>
          {`Welcome to ${store.identity}`}
        </Text>
      </View>
  )
}

export default MainScreen
