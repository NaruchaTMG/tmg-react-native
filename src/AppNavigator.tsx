import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './Navigators.ts';
import TabScreen from './screens/TabScreen.tsx';
import MainScreen from './screens/MainScreen.tsx';
import ProfileDetail from './screens/profile_detail';

function AppNavigator() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'TabScreen'} screenOptions={{ headerShown: true }}>
          <Stack.Screen name={'TabScreen'} component={TabScreen} options={{headerShown: false}} />
          <Stack.Screen name={'MainScreen'} component={MainScreen} />
          <Stack.Screen name={'ProfileDetail'} component={ProfileDetail} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigator