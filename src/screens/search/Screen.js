import React, {useRef} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  GOOGLE_PLACE_API_KEY,
  PLACE_ADDRESS_KEYS,
} from '../../utilities/Constants';
import {GLOBAL_STYLES} from '../../utilities/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './Styles';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../utilities/Colors';

const SearchScreen = ({navigation}) => {
  const googleTextInputRef = useRef();

  return (
    <View style={GLOBAL_STYLES.container}>
      <ImageBackground
        source={{
          uri: 'https://img.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg?w=1480&t=st=1667113686~exp=1667114286~hmac=8ff828c07b3526b0bc380c1f03aca12bd80334e098bc5425005708df69c03a98',
        }}
        style={{
          flex: 1,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backPressable}
          onPress={() => {
            navigation.navigate('Home');
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
                addressComponent.types.includes(PLACE_ADDRESS_KEYS.CITY),
              )?.long_name ?? '';

            const {geometry, name} = details;

            navigation.navigate('Home', {
              latitude: geometry?.location?.lat,
              longitude: geometry?.location?.lng,
              name: city ?? name,
            });
          }}
          query={{
            key: GOOGLE_PLACE_API_KEY,
            language: 'en',
          }}
          onFail={alert}
          onNotFound={() => console.log('no results')}
          listEmptyComponent={() => (
            <View
              style={[
                GLOBAL_STYLES.container,
                GLOBAL_STYLES.sideScreenPadding,
              ]}>
              <Text style={{color: COLORS.black}}>No results were found</Text>
            </View>
          )}
          styles={{
            container: styles.googleTextInput(),
            description: {
              color: COLORS.black,
              fontSize: moderateScale(16),
            },
            predefinedPlacesDescription: {
              color: COLORS.black,
            },
          }}
          listUnderlayColor={COLORS.black}
          textInputProps={{
            color: COLORS.black,
          }}
        />
      </ImageBackground>
    </View>
  );
};
export default SearchScreen;
