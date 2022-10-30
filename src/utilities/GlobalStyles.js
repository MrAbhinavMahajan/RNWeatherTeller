import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {appThemeColor} from './Constants';

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  alignRow: {
    flexDirection: 'row',
  },
  alignInsetsCenter: (isRowAligned = false) =>
    isRowAligned ? {alignItems: 'center'} : {justifyContent: 'center'},
  alignInsetsTotallyCenter: {justifyContent: 'center', alignItems: 'center'},
  screenColor: {
    backgroundColor: appThemeColor,
  },
  sideScreenPadding: {
    paddingHorizontal: horizontalGap,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export const horizontalGap = scale(10);

export const verticalGap = scale(20);
