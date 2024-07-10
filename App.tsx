/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
      <View
          style={{flex: 1, flexDirection: 'column', backgroundColor: 'green'}}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'red'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Hello React Native!
          </Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'blue'}}>
          <Image source={require("./src/assets/images/bear.jpeg")} />
        </View>
        <View style={{flex: 3, backgroundColor: 'yellow'}}/>
      </View>

  );
}

export default App;
