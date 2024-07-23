import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabParamList,
  ProfileStackParamList,
  RootStackParamList,
} from './screens/StackParamList.ts';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const PStack = createNativeStackNavigator<ProfileStackParamList>();
export const Tab = createBottomTabNavigator<BottomTabParamList>();


