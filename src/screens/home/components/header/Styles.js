import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLORS} from '../../../../utilities/Colors';
import {appThemeColor} from '../../../../utilities/Constants';

export const styles = StyleSheet.create({
  circle: {
    borderRadius: 1000,
  },

  menuBarWrapper: {
    backgroundColor: COLORS.violet,
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
    backgroundColor: appThemeColor,
  },

  headerLabel: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: COLORS.white,
    padding: 15,
  },

  rightPressable: {
    width: 100,
    aspectRatio: 90 / 32,
    backgroundColor: COLORS.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  rightPressableLabel: {
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: COLORS.lightBlue,
  },
});
