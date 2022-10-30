import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../utilities/Colors';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: COLORS.semiDarkBlue,
    alignItems: 'center',
  },
  weatherStatus: {
    fontSize: moderateScale(15),
    fontWeight: '600',
    color: COLORS.white,
  },
  listWeatherItem: (hightlight = false) => ({
    flexDirection: 'row',
    padding: moderateScale(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: hightlight ? COLORS.darkViolet : COLORS.semiDarkBlue,
  }),
  weatherItemTitle: {
    fontSize: moderateScale(16),
    color: COLORS.purple,
    marginBottom: 7,
  },
});
