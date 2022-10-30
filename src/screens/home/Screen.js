import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Text,
  View,
  Alert,
  ImageBackground,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {isAndroid, isiOS} from '../../utilities/Constants';
import {GLOBAL_STYLES} from '../../utilities/GlobalStyles';
import {Header} from './components/header/Header';
import {WeatherTeller} from './components/weather/WeatherTeller';

const HomeScreen = props => {
  const {route} = props;
  const [status, setStatus] = useState('checking');
  const [data, setData] = useState({});

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
        setData(position);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }

  useEffect(() => {
    if (route?.params?.latitude && route?.params?.longitude) {
      const {latitude, longitude} = route.params;
      let coords = {latitude, longitude};
      setData({coords});
    }
  }, [route]);

  useFocusEffect(
    useCallback(() => {
      if (
        !route?.params?.latitude &&
        !route?.params?.longitude &&
        status === 'granted'
      ) {
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
    }, [status]),
  );

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
          Permissions not granted, please go to settings and enable it
        </Text>
      </View>
    );
  }

  return (
    <View style={GLOBAL_STYLES.container}>
      <Header />
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg?w=1480&t=st=1667113686~exp=1667114286~hmac=8ff828c07b3526b0bc380c1f03aca12bd80334e098bc5425005708df69c03a98',
        }}
        style={GLOBAL_STYLES.container}>
        <WeatherTeller
          {...props}
          latitude={data?.coords?.latitude}
          longitude={data?.coords?.longitude}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
