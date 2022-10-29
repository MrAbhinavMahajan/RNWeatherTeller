import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';

export const Icon = ({source, styles}) => (
  <Image source={source} style={[styles, {resizeMode: 'contain'}]} />
);

export const CustomButton = ({label, btn}) => (
  <TouchableOpacity style={btn.styles} onPress={() => btn.action()}>
    <Text style={label.styles}>{label.value}</Text>
  </TouchableOpacity>
);
