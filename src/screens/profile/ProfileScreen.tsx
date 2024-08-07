import {Button, Pressable, Text, View} from 'react-native';
import {styles} from './styles.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackParamList,
} from '../StackParamList.ts';
import {useEffect, useLayoutEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileScreen'>;

function ProfileScreen({navigation, route}: Props) {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Pressable onPress={() => navigation.pop()}>
        <Text>{"Back"}</Text>
      </Pressable>
    })
  }, [navigation]);

  useEffect(() => {
    console.log("Welcome")

    return () => {
      console.log("Good luck")
    }
  }, []);

  return <View style={styles.container}>
    <Button color={"black"} title={"Profile Pop"} onPress={() => navigation.pop()} />
    <Button title={"Profile Screen"} onPress={() => navigation.navigate("ProfileDetail")} />
  </View>
}

export default ProfileScreen
