import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import moment from 'moment-timezone';
import {styles} from './Styles';
import {GLOBAL_STYLES} from '../../../../utilities/GlobalStyles';
import {getCelsiusFromKelvin} from '../../../../utilities/GlobalFunctions';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const WeatherCard = ({uri, temp, unit}) => (
  <View style={styles.weatherCard}>
    <Image
      source={{
        uri: `https://openweathermap.org/img/wn/${uri}@4x.png`,
      }}
      style={styles.weatherCardImg}
      resizeMethod={'resize'}
      resizeMode={'contain'}
    />
    <Text style={styles.weatherCardTemp}>
      {temp}
      {unit}
    </Text>
  </View>
);

const WeatherItem = ({title, value, unit}) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemValue}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTimeTeller = ({weatherDetails, timezone}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function dateTimeSetter() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';

    setTime(
      (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) +
        ':' +
        (minutes < 10 ? '0' + minutes : minutes) +
        ampm,
    );

    setDate(days[day] + ', ' + date + ' ' + months[month]);
  }

  useEffect(() => {
    dateTimeSetter();

    const interval = setInterval(() => {
      dateTimeSetter();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={GLOBAL_STYLES.alignRow}>
        <View style={GLOBAL_STYLES.container}>
          <Text style={styles.heading}>{time}</Text>

          <Text style={styles.subheading}>{date}</Text>
        </View>

        <WeatherCard
          uri={weatherDetails.weather[0].icon}
          temp={getCelsiusFromKelvin(weatherDetails?.temp) ?? ''}
          unit="°C"
        />
      </View>

      <View style={styles.weatherItemContainer}>
        <WeatherItem
          title="Humidity"
          value={(weatherDetails?.humidity).toFixed(1) ?? ''}
          unit="%"
        />
        <WeatherItem
          title="Pressure"
          value={weatherDetails?.pressure ?? ''}
          unit=" hPA"
        />
        <WeatherItem
          title="Sunrise"
          value={
            weatherDetails
              ? moment
                  .tz(weatherDetails.sunrise * 1000, timezone)
                  .format('HH:mm')
              : ''
          }
          unit=" am"
        />
        <WeatherItem
          title="Sunset"
          value={
            weatherDetails
              ? moment
                  .tz(weatherDetails.sunset * 1000, timezone)
                  .format('HH:mm')
              : ''
          }
          unit=" pm"
        />
      </View>
    </View>
  );
};

export default DateTimeTeller;
