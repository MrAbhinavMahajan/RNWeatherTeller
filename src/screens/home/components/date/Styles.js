import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {COLORS} from '../../../../utilities/Colors';
import {horizontalGap, verticalGap} from '../../../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalGap,
    paddingVertical: verticalGap,
  },
  heading: {
    fontSize: moderateScale(35),
    color: COLORS.white,
    fontWeight: '100',
  },
  subheading: {
    fontSize: moderateScale(25),
    color: COLORS.white,
    fontWeight: '500',
    marginBottom: verticalGap,
  },
  weatherCard: {
    marginLeft: scale(10),
    marginBottom: verticalGap,
    alignItems: 'center',
    backgroundColor: COLORS.basic800,
    padding: moderateScale(10),
    borderRadius: moderateScale(15),
  },
  weatherCardImg: {
    minWidth: scale(50),
    minHeight: verticalScale(50),
    borderRadius: moderateScale(15),
  },
  weatherCardTemp: {
    fontSize: moderateScale(18),
    color: COLORS.white,
    fontWeight: '700',
  },
  weatherItemContainer: {
    backgroundColor: COLORS.basic800,
    borderRadius: scale(10),
    padding: scale(10),
  },
  weatherItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
  weatherItemTitle: {
    color: COLORS.primary100,
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  weatherItemValue: {
    color: COLORS.primary100,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
});
