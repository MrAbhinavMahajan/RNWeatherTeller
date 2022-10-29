import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {api_key, placeAddressKeys} from '../../utilities/Constants';
import {GLOBAL_STYLES} from '../../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './Styles';

const SearchScreen = ({navigation}) => {
  const googleTextInputRef = useRef();
  const selectedCity = useRef();

  return (
    <View style={GLOBAL_STYLES.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.backPressable}
        onPress={() => {
          navigation.navigate('Home', {
            latitude: selectedCity.current?.geometry?.location?.lat,
            longitude: selectedCity.current?.geometry?.location?.lng,
            name: selectedCity.current?.name,
          });
        }}>
        <Icon name="md-chevron-back" size={30} />
        <Text style={styles.backPressableTitle}>Change City</Text>
      </TouchableOpacity>

      <GooglePlacesAutocomplete
        ref={ref => (googleTextInputRef.current = ref)}
        autoFocus={false}
        fetchDetails={true}
        autoFillOnNotFound
        enableHighAccuracyLocation={true}
        enablePoweredByContainer={false}
        placeholder={'Search Address'}
        returnKeyType={'default'}
        onPress={(data, details = null) => {
          const city =
            details?.address_components.find(addressComponent =>
              addressComponent.types.includes(placeAddressKeys.CITY),
            )?.long_name ?? '';

          const {geometry, name} = details;
          selectedCity.current = {geometry, name};
          console.log({city});
        }}
        query={{
          api_key,
          language: 'en',
        }}
        onFail={error => console.log({error})}
        onNotFound={() => console.log('no results')}
        listEmptyComponent={() => (
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text>No results were found</Text>
          </View>
        )}
        styles={{
          container: styles.googleTextInput(),
          description: {
            color: '#000',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#3caf50',
          },
        }}
      />
    </View>
  );
};
export default SearchScreen;
