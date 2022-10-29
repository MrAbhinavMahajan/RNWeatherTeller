import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home/Screen';
import Search from '../screens/search/Screen';
import {navigationRef} from './Service';

const {Navigator, Screen} = createNativeStackNavigator();

const RootStack = () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator
      initialRouteName={'Home'}
      screenOptions={{
        gestureEnabled: false,
        animation: 'fade_from_bottom',
        orientation: 'portrait',
        headerShown: false,
      }}>
      <Screen name={'Home'} component={Home} />
      <Screen
        name={'Search'}
        component={Search}
        options={{
          headerShown: true,
          headerTitle: 'Change City',
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default RootStack;
