import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  RootStackParamList,
} from './screens/StackParamList.ts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const PStack = createNativeStackNavigator<RootStackParamList>();
export const Tab = createBottomTabNavigator<RootStackParamList>();


