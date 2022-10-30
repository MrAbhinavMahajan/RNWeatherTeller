/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../../../../utilities/Colors';
import {WEATHER_API_KEY} from '../../../../utilities/Constants';
import {getCelsiusFromKelvin} from '../../../../utilities/GlobalFunctions';
import {GLOBAL_STYLES} from '../../../../utilities/GlobalStyles';
import DateTimeTeller from '../date/DateTimeTeller';
import {styles} from './Styles';

const WeatherItem = ({title, value, unit}) => {
  return (
    <View
      style={[GLOBAL_STYLES.container, GLOBAL_STYLES.alignInsetsTotallyCenter]}>
      {title && <Text style={styles.weatherItemTitle}>{title}</Text>}
      <Text style={{...styles.weatherItemTitle, color: COLORS.white}}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const renderWeatherItems = ({item, index}) => {
  const img = {
    uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
  };

  return (
    <View style={styles.listWeatherItem(index % 2 === 0)}>
      <View style={GLOBAL_STYLES.alignRow}>
        <View style={GLOBAL_STYLES.alignInsetsCenter(true)}>
          <Image
            source={img}
            style={{
              width: scale(100),
              height: verticalScale(50),
            }}
            resizeMethod={'resize'}
            resizeMode={'contain'}
          />
          <Text style={styles.weatherStatus}>
            {item?.weather[0]?.main ?? ''}
          </Text>
        </View>

        <WeatherItem
          title="Pressure"
          value={item?.pressure ?? ''}
          unit=" hPA"
        />
        <WeatherItem
          title="Humidity"
          value={item?.humidity?.toFixed(1) ?? ''}
          unit="%"
        />
      </View>
    </View>
  );
};

const WeatherDetailsList = ({weatherDetails}) => {
  return (
    <View style={styles.listWrapper}>
      <FlatList
        data={weatherDetails?.daily ?? []}
        renderItem={renderWeatherItems}
        keyExtractor={(item, index) => `Weather_${index.toString()}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export const WeatherTeller = ({latitude, longitude}) => {
  const [weatherDetails, setWeatherDetails] = React.useState();

  const fetchWeatherData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&&exclude=hourly,minutely&appid=${WEATHER_API_KEY}`;

    fetch(url)
      .then(res => res.json())
      .then(weatherDetails => {
        setWeatherDetails(weatherDetails);
      })
      .catch(error => {
        console.log({error});
      });
  };

  React.useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  if (!weatherDetails) {
    return (
      <View style={[GLOBAL_STYLES.loaderWrapper, GLOBAL_STYLES.screenColor]}>
        <ActivityIndicator size={'large'} color={COLORS.info200} />
      </View>
    );
  }

  return (
    <View style={GLOBAL_STYLES.container}>
      <DateTimeTeller
        weatherDetails={weatherDetails.current}
        timezone={weatherDetails.timezone}
      />
      <WeatherDetailsList weatherDetails={weatherDetails} />
    </View>
  );
};
