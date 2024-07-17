import {Text, View} from 'react-native';
import {RootStackParamList} from './RootStackParamList.ts';
import {useState} from 'react';
import HomeScreen from './home';
import {NavigationContainer, } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './profile';
import FeedScreen from './feed';
import SettingScreen from './setting';

function AppNavigator() {
  const [state, setState] = useState<boolean>(false)
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: true }}>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} options={{ headerShown: true, title: 'TMG Training' }} />
          <Stack.Screen name={'FeedScreen'} component={FeedScreen} options={{headerLeft: () => <Text>{"Left"}</Text>}}/>
          <Stack.Screen name={'SettingScreen'} component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigator
