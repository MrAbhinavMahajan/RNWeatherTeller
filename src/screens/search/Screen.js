import React from 'react';
import {Button, Text, View} from 'react-native';

const Search = ({navigation}) => {
  return (
    <View>
      <Text>Search Screen</Text>
      <Button
        title="Go To Home"
        onPress={() => {
          navigation.navigate('Home', {city: 'New'});
        }}
      />
    </View>
  );
};
export default Search;
