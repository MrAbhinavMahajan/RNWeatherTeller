import {StyleSheet} from 'react-native';
import {horizontalGap} from '../../utilities/GlobalStyles';

export const styles = StyleSheet.create({
  backPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: horizontalGap,
  },
  backPressableTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  googleTextInput: (isEditable = true) => ({
    color: isEditable ? 'black' : '#C4C4C4',
    fontSize: 16,
    paddingHorizontal: horizontalGap,
  }),
});
