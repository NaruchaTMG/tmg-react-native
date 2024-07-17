import {Button, Pressable, Text, View} from 'react-native';
import {styles} from './styles.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStackParamList.ts';
import {useEffect, useLayoutEffect} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

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
    <Text style={{width: "100%", textAlign: "center"}}>
      {route.params ? route.params.userId : "No content"}
    </Text>
    <Button color={"black"} title={"Profile Pop"} onPress={() => navigation.pop()} />
    <Button title={"Profile Screen"} onPress={() => navigation.push("ProfileScreen")} />
  </View>
}

export default ProfileScreen
