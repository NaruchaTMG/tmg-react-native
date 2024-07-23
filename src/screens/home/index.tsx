import {Button, View} from 'react-native';
import {styles} from './styles.ts';
import {BottomTabParamList, RootStackParamList} from '../StackParamList.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'TabScreen'>

function HomeScreen({navigation, route}: Props) {
  return <View style={styles.container}>
    {/*<Button title={"Profile Screen without params"} onPress={() => navigation.navigate("ProfileScreen")} />*/}
    {/*<Button title={"Profile Screen with params"} onPress={() => navigation.navigate("ProfileScreen")} />*/}
    {/*<Button title={"Feed Screen"} onPress={() => navigation.navigate("FeedScreen")} />*/}
    {/*<Button title={"Setting Screen"} onPress={() => navigation.navigate("SettingScreen")} />*/}
    <Button title={"React Hook Screen"} onPress={() => navigation.navigate("ReactHookScreen")} />
  </View>
}

export default HomeScreen
