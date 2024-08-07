import {Button, Text, View} from 'react-native';
import {globalStyles} from '../GlobalStyles.ts';
import CustomText from '../components/text/custom/CustomText.tsx';
import {observer} from 'mobx-react';
import {useStore} from '../stores/Store.ts';

function MainScreen() {
  const mainStore = useStore()
  return (
      <View style={globalStyles.containerCenter}>
        <Text style={[globalStyles.notosanBold, {fontSize: 24}]}>
          {`Welcome to ${mainStore.identity}`}
        </Text>
        <CustomText fontFamily={"Bold"} fontSize={20} customStyle={{color: "black"}}>
          {mainStore.count}
        </CustomText>
        <CustomText fontFamily={"Bold"} fontSize={20} customStyle={{color: "black"}}>
          {`Double ${mainStore.doubleCount}`}
        </CustomText>
        <Button title={'increment'} onPress={() => mainStore.increment()} />
        <Button title={'decrement'} onPress={() => mainStore.decrement()} />
      </View>
  )
}

export default observer(MainScreen)
