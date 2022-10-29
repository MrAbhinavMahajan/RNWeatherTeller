import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, Text, View, Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {isAndroid, isiOS} from '../../utilities/Constants';
import {GLOBAL_STYLES} from '../../utilities/GlobalStyles';
import {Header} from './components/header/Header';
import {WeatherTeller} from './components/weather/WeatherTeller';

navigator.geolocation = require('react-native-geolocation-service');

const Home = props => {
  const {navigation} = props;
  const [status, setStatus] = useState('checking');

  async function requestPermissions() {
    if (isiOS) {
      const authorizationLevel = 'always';
      const permission_status = await Geolocation.requestAuthorization(
        authorizationLevel,
      );
      setStatus(permission_status);
    }

    if (isAndroid) {
      const permission_status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setStatus(permission_status);
    }
  }
  requestPermissions();

  async function getCurrentPosition() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  useEffect(() => {
    console.log({status});
    if (status === 'granted') {
      getCurrentPosition();
    }

    if (
      status === 'disabled' ||
      status === 'denied' ||
      status === 'restricted'
    ) {
      Alert.alert(
        'Alert',
        'Please grant location access to use weather teller',
        [
          {
            text: 'ok',
            onPress: () => {
              requestPermissions();
            },
          },
        ],
      );
    }

    return () => {};
  }, [status]);

  if (status === 'checking') {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status !== 'granted') {
    return (
      <View>
        <Text>
          Permissions not granted, please install again and grant permissios
        </Text>
      </View>
    );
  }

  return (
    <View style={GLOBAL_STYLES.container}>
      <Header />
      <WeatherTeller {...props} />
    </View>
  );
};

export default Home;
