import {NavigationContainer} from '@react-navigation/native';
import {Stack} from './Navigators.ts';
import MainScreen from './screens/MainScreen.tsx';
import AuthScreen from './screens/auth';

function AppNavigator() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'AuthScreen'} screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'AuthScreen'} component={AuthScreen} />
          {/*<Stack.Screen name={'TabScreen'} component={TabScreen} options={{headerShown: false}} />*/}
          <Stack.Screen name={'MainScreen'} component={MainScreen} />
          {/*<Stack.Screen name={'ProfileDetail'} component={ProfileDetail} />*/}
          {/*<Stack.Screen name={'ReactHookScreen'} component={ReactHookScreen} />*/}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default AppNavigator
