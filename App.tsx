/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert, FlatList,
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

function FlatListSample() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Fifth Item',
    },
  ];
  function RenderItem(props: { item: any }) {
    return <View style={{
      width: '100%',
      height: 50,
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 8,
    }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
        {props.item.title}
      </Text>
      <Text style={{fontSize: 14, fontWeight: 'normal', color: 'white'}}>
        {props.item.id}
      </Text>
    </View>;
  }
  return (
      // <ScrollView
      //     style={{flex: 1}}
      //     contentContainerStyle={{gap: 10, padding: 20, marginTop: 50}}
      // >
      //   {
      //     DATA.map((item, index) => (
      //         <View key={index} style={{width: '100%', height: 50, backgroundColor: 'black', padding: 10, borderRadius: 8}}>
      //           <Text style={{fontSize: 16, fontWeight: 'bold', color: "white"}}>
      //             {item.title}
      //           </Text>
      //           <Text style={{fontSize: 14, fontWeight: 'normal', color: "white"}}>
      //             {item.id}
      //           </Text>
      //         </View>
      //     ))
      //   }
      // </ScrollView>
      <FlatList
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: 10, padding: 20, marginTop: 50}}
          data={DATA}
          renderItem={({item, index}) => <RenderItem item={item}/>}/>
  )
}
function App(): React.JSX.Element {
  return (
    <FlatListSample />
  );
}

export default App;
