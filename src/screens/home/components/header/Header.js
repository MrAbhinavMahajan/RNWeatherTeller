import React from 'react';
import {Image, Text, View} from 'react-native';
import {navigate} from '../../../../app/Service';
import Assets from '../../../../utilities/Assets';
import {CustomButton} from '../../../../utilities/Extensions';
import {styles} from './Styles';

export const Header = props => (
  <View style={styles.headerWrapper}>
    <View style={styles.headerInfoWrapper}>
      <View style={[styles.menuBarWrapper, styles.circle]}>
        <Image source={Assets.menuBars} />
      </View>

      <Text style={styles.headerLabel}>Weather</Text>
    </View>

    <CustomButton
      btn={{
        action: () => {
          navigate('Search');
        },
        styles: styles.rightPressable,
      }}
      label={{
        value: 'Select City',
        styles: styles.rightPressableLabel,
      }}
    />
  </View>
);
