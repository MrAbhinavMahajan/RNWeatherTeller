import React from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => (
  <View>
    <Text>Home Screen</Text>
    <Icon name="rocket" size={30} color="#900" />

    <Button
      title="Go To Search"
      onPress={() => {
        navigation.navigate('Search');
      }}
    />
  </View>
);

export default Home;
