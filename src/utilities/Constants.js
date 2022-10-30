import {Dimensions, Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import {COLORS} from './Colors';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const isiOS = Platform.OS === 'ios';

export const hasNotch = deviceInfoModule.hasNotch();

export const appThemeColor = COLORS.basic900;

export const GOOGLE_PLACE_API_KEY = '<Places API key>';

export const WEATHER_API_KEY = '9ae2447983447457a57564703f4382ac';

export let PLACE_ADDRESS_KEYS = {
  ZIP_CODE: 'postal_code',
  COUNTRY: 'country',
  STATE: 'administrative_area_level_1',
  CITY: 'administrative_area_level_2',
  SUBURB: 'sublocality',
  TOWN: 'sublocality_level_1',
  AREA: 'sublocality_level_2',
  NEAREST_ROAD: 'route',
  STREET: 'street_address',
};
