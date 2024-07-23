import {PStack, Tab} from '../Navigators.ts';
import Home from './home';
import HomeScreen from './home';
import ProfileScreen from './profile';
import FeedScreen from './feed';
import SettingScreen from './setting';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import ProfileDetail from './profile_detail';

function ProfileStack() {
  return (
      <PStack.Navigator>
        <PStack.Screen name={'ProfileScreen'} component={ProfileScreen}/>
        <PStack.Screen name={'ProfileDetail'} component={ProfileDetail} options={{animation: "default"}}/>
      </PStack.Navigator>
  );
}

export default function TabScreen() {
  function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
    return (
        <View style={{flexDirection: 'row', height: 80}}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            let label = '';
            let icon: any;

            switch (route.name) {
              case 'HomeScreen':
                label = 'Home';
                icon = require('../assets/icons/ic_home.png');
                break;
              case 'ProfileStack':
                label = 'Profile';
                icon = require('../assets/icons/ic_user.png');
                break;
              case 'FeedScreen':
                label = 'Feed';
                icon = require('../assets/icons/ic_feeds.png');
                break;
              case 'SettingScreen':
                label = 'Setting';
                icon = require('../assets/icons/ic_settings.png');
                break;
              default:
                break;
            }

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
                <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? {selected: true} : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 10,
                    }}
                >
                  <Image source={icon} style={{
                    width: 25,
                    height: undefined,
                    aspectRatio: 1,
                  }}/>
                  <Text style={{color: isFocused ? 'red' : 'grey'}}>
                    {`${label}`}
                  </Text>
                </TouchableOpacity>
            );
          })}
        </View>
    );
  }

  return (
      <Tab.Navigator screenOptions={{headerShown: false}}
                     tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="ProfileStack" component={ProfileStack}/>
        <Tab.Screen name="FeedScreen" component={FeedScreen}/>
        <Tab.Screen name="SettingScreen" component={SettingScreen}/>
      </Tab.Navigator>
  );
}
