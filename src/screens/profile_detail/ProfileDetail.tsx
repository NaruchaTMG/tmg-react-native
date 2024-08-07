import {View} from 'react-native';
import {useEffect} from 'react';

export default function ProfileDetail () {
  useEffect(() => {
    console.log("Welcome")

    return () => {
      console.log("Good luck")
    }
  }, []);
  return <View style={{flex:1, backgroundColor: "grey"}}></View>
}
