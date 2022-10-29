import React from 'react';
import {Button, Text, View} from 'react-native';

const Search = ({navigation}) => (
  <View>
    <Text>Search Screen</Text>
    <Button
      title="Go To Home"
      onPress={() => {
        navigation.navigate('Home');
      }}
    />
  </View>
);

export default Search;
