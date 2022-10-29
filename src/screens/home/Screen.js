import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="Go To Search"
      onPress={() => {
        navigation.navigate('Search');
      }}
    />
  </View>
);

export default Home;
