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
  SafeAreaView, ScrollView,
  Text, TextInput, TouchableOpacity,
  View,
} from 'react-native';

function FirstWidget(props: {
  onPress: () => void,
  onPress1: () => void,
  onChangeText: (text: string) => void
}) {
  return <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: 'green'}}>
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    }}>
      <TouchableOpacity
          onPress={props.onPress}>
        <Text
            style={{fontSize: 20, fontWeight: 'bold'}}>
          Hello TouchableOpacity!
        </Text>
      </TouchableOpacity>
      <Pressable
          onPress={props.onPress1}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Hello Pressable!
        </Text>
      </Pressable>
      <TextInput
          onChangeText={props.onChangeText}
          style={{height: 45, width: 200, backgroundColor: 'grey'}}/>
    </View>
    <View style={{flex: 1, backgroundColor: 'blue', flexDirection: 'row'}}>
      <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={require('./src/assets/images/bear.jpeg')}/>
      <Image
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          source={{uri: 'https://profile.line-scdn.net/0hylJGQ8BXJkN3PjWeQyhZFEt7KC4AECALD11pdQA_fCZeCDFGGQs8JwBsKHVdCmgdHgo8IwY9cHcP'}}/>
    </View>
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <ImageBackground
          style={{flex: 1, padding: 100}}
          source={require('./src/assets/images/bear.jpeg')}
      >
        <View
            style={{width: 40, height: 40, backgroundColor: 'red'}}></View>
      </ImageBackground>
    </View>
  </View>;
}

function ScrollViewSample() {
  return <SafeAreaView style={{flex: 1}}>
    <ScrollView
        horizontal={false}
        style={{flex: 1, backgroundColor: 'white'}}
        contentContainerStyle={{backgroundColor: 'blue'}}
        showsVerticalScrollIndicator={false}
    >
      <View style={{width: '100%', height: 350, backgroundColor: 'yellow'}}/>
      <View style={{width: '100%', height: 350, backgroundColor: 'green'}}/>
      <View style={{width: '100%', height: 350, backgroundColor: 'blue'}}/>
      <View style={{width: '100%', height: 350, backgroundColor: 'purple'}}/>
      <View style={{width: '100%', height: 350, backgroundColor: 'grey'}}/>
    </ScrollView>
  </SafeAreaView>;
}

function App(): React.JSX.Element {
  return (
     <View></View>
  );
}

export default App;
