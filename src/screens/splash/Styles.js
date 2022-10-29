import {StyleSheet} from 'react-native';
import {COLORS} from '../../utilities/Colors';
import {appThemeColor} from '../../utilities/Constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {fontSize: 30, fontWeight: '900', color: COLORS.white},
});
