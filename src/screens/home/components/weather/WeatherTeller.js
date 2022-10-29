import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {COLORS} from '../../../../utilities/Colors';
import {api_key} from '../../../../utilities/Constants';
import {GLOBAL_STYLES} from '../../../../utilities/GlobalStyles';
import {styles} from './Styles';

const renderWeatherItems = ({item, index}) => {
  return (
    <View style={styles.listWeatherItem(index % 2 === 0)}>
      <View style={GLOBAL_STYLES.alignRow}>
        <View style={GLOBAL_STYLES.container}>
          <Text style={styles.nameLabel}>Temperature</Text>
          <Text style={{...styles.nameLabel, color: COLORS.white}}>
            {item.temp.day}
          </Text>
        </View>

        <View style={GLOBAL_STYLES.container}>
          <Text style={styles.nameLabel}>Humidity</Text>
          <Text style={{...styles.nameLabel, color: COLORS.white}}>
            {item.humidity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const WeatherDetailsList = ({weatherDetails}) => {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={weatherDetails ?? []}
        renderItem={renderWeatherItems}
        keyExtractor={(item, index) => `Weather_${index.toString()}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const CurrentWeatherTeller = ({weatherDetails}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary200}}>
      <Text style={{}}>Temperature is: -</Text>
      <Text style={{}}>{weatherDetails?.temp} °F</Text>
      <Text style={{}}>Humidity is: -</Text>
      <Text style={{}}>{weatherDetails?.humidity}</Text>
    </View>
  );
};

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

  if (!(weatherDetails && currentWeatherDetails)) {
    return (
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size={'large'} color={COLORS.darkBlue} />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <CurrentWeatherTeller weatherDetails={currentWeatherDetails} />
      <WeatherDetailsList weatherDetails={weatherDetails} />
    </View>
  );
};
