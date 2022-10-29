import {Platform, StyleSheet} from 'react-native';
import {COLORS} from './Colors';

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary400,
  },
  alignRow: {
    flexDirection: 'row',
  },
});
