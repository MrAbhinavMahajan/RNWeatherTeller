import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {horizontalGap} from '../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  backPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: horizontalGap,
  },
  backPressableTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
  googleTextInput: (isEditable = true) => ({
    color: isEditable ? 'black' : '#C4C4C4',
    fontSize: moderateScale(16),
    paddingHorizontal: horizontalGap,
  }),
});
