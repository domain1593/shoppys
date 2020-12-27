import { Dimensions, StyleSheet } from 'react-native';
import shoppysTheme from '../../../../assets/theme/theme';

const styles = StyleSheet.create({
  listBackground: {
    backgroundColor: shoppysTheme.white.neutral,
  },
  itemBackground: {
    backgroundColor: shoppysTheme.light.neutral,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2.5,
    margin: 12,
    borderRadius: 20,
  }
});

export default styles;
