import { Dimensions, StyleSheet } from 'react-native';
import shoppysTheme from '../../../../assets/theme/theme';

const avatarValue = 32;

const styles = StyleSheet.create({
  headerDistribution: {
    padding: 16,
    backgroundColor: shoppysTheme.light.neutral,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  AvatarStyle: {
    paddingRight: 16,
    width: avatarValue,
    height: avatarValue,
    borderRadius: avatarValue / 2,
  },
  avatarFlex: {
    flex: 1,
  },
  locaTionBox: {
    backgroundColor: shoppysTheme.white.neutral,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 4,
    width: Dimensions.get('window').width / 1.5,
    height: 32,
    borderRadius: Dimensions.get('window').width / 2,
  },
  locationIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  locationInput: {
    flex: 4,
    padding: 0,
    textAlignVertical: 'center',
    textAlign: 'center',
    height: 32
  }
});

export default styles;
