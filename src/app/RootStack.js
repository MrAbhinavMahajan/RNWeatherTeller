import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './Service';
import SplashScreen from '../screens/splash/Screen';
import HomeScreen from '../screens/home/Screen';
import SearchScreen from '../screens/search/Screen';

const {Navigator, Screen} = createNativeStackNavigator();

const RootStack = () => (
  <NavigationContainer ref={navigationRef}>
    <Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        gestureEnabled: false,
        animation: 'fade_from_bottom',
        orientation: 'portrait',
        headerShown: false,
      }}>
      <Screen name={'Splash'} component={SplashScreen} />
      <Screen name={'Home'} component={HomeScreen} />
      <Screen
        name={'Search'}
        component={SearchScreen}
        options={{
          headerShown: true,
          headerTitle: 'Change City',
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default RootStack;
