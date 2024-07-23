import {Button, View} from 'react-native';
import {styles} from './styles.ts';
import {BottomTabParamList} from '../StackParamList.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useEffect} from 'react';

type Props = NativeStackScreenProps<BottomTabParamList, 'HomeScreen'>;

function HomeScreen({navigation, route}: Props) {

  return <View style={styles.container}>
    <Button title={"Profile Screen without params"} onPress={() => navigation.navigate("ProfileScreen")} />
    <Button title={"Profile Screen with params"} onPress={() => navigation.navigate("ProfileScreen")} />
    <Button title={"Feed Screen"} onPress={() => navigation.navigate("FeedScreen")} />
    <Button title={"Setting Screen"} onPress={() => navigation.navigate("SettingScreen")} />
  </View>
}

export default HomeScreen
