import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {ErrorBoundary} from '../errors/ErrorBoundary';
import {COLORS} from '../utilities/Colors';
import {hasNotch, isAndroid} from '../utilities/Constants';
import RootStack from './RootStack';

const App = () => (
  <ErrorBoundary>
    <SafeAreaView style={STYLES.safeAreaWrapper}>
      <RootStack />
    </SafeAreaView>
  </ErrorBoundary>
);

export default App;

const STYLES = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    paddingTop: isAndroid && hasNotch ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.primary400,
  },
});
