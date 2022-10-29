import React, {useEffect, useState} from 'react';
import {
  Button,
  PermissionsAndroid,
  Text,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Geolocation from 'react-native-geolocation-service';
import {isAndroid, isiOS} from '../../utilities/Constants';

navigator.geolocation = require('react-native-geolocation-service');

const Home = ({navigation}) => {
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState('Checking');

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
    <View>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />

      <Button
        title="Go To Search"
        onPress={() => {
          navigation.navigate('Search');
        }}
      />
    </View>
  );
};

export default Home;
