/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Platform, Pressable,
  SafeAreaView,
  Text, TextInput, TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
      <View
          style={{flex: 1, flexDirection: 'column', backgroundColor: 'green'}}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
          <TouchableOpacity
              onPress={() => Alert.alert('TouchableOpacity')}>
            <Text
                style={{fontSize: 20, fontWeight: 'bold'}}>
              Hello TouchableOpacity!
            </Text>
          </TouchableOpacity>
          <Pressable
              onPress={() => Alert.alert('PressableOpacity')}
          >
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Hello Pressable!
            </Text>
          </Pressable>
          <TextInput
              onChangeText={(text: string) => console.log(text)}
              style={{height: 45, width: 200, backgroundColor: 'grey'}}/>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', flexDirection: 'row'}}>
          <Image
              style={{width: '50%', height: '100%', resizeMode: 'contain'}}
              source={require('./src/assets/images/bear.jpeg')}/>
          <Image
              style={{width: '50%', height: '100%', resizeMode: 'contain'}}
              source={{uri: 'https://profile.line-scdn.net/0hylJGQ8BXJkN3PjWeQyhZFEt7KC4AECALD11pdQA_fCZeCDFGGQs8JwBsKHVdCmgdHgo8IwY9cHcP'}}/>
        </View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
          <ImageBackground
              style={{flex: 1, padding: 50}}
              source={require('./src/assets/images/bear.jpeg')}
          >
            <View
                style={{width: 40, height: 40, backgroundColor: 'red'}}></View>
          </ImageBackground>
        </View>
      </View>

  );
}

export default App;
