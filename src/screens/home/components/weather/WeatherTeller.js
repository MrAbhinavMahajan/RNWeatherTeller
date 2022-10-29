import React from 'react';
import {Text, View} from 'react-native';
import {api_key} from '../../../../utilities/Constants';

export const WeatherTeller = props => {
  const [currentWeatherDetails, setCurrentWeatherDetails] = React.useState();
  const [weatherDetails, setWeatherDetails] = React.useState();

  const fetchCurrentWeatherData = async () => {
    let currentWeatherDetails = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${api_key}`,
    );
    try {
      currentWeatherDetails = await currentWeatherDetails?.json();
      currentWeatherDetails = currentWeatherDetails.main;
      setCurrentWeatherDetails(currentWeatherDetails);
    } catch (error) {
      console.log({error});
    }
  };

  const fetchWeatherData = async () => {
    let weatherDetails = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&&exclude=hourly,minutely&appid=${api_key}`,
    );
    try {
      weatherDetails = await weatherDetails?.json();
      weatherDetails = weatherDetails.daily.slice(0, 6);
      setWeatherDetails(weatherDetails);
    } catch (error) {
      console.log({error});
    }
  };

  React.useEffect(() => {
    fetchCurrentWeatherData();
    fetchWeatherData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Hii</Text>
    </View>
  );
};
