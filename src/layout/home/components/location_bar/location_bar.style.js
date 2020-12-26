import { Dimensions, StyleSheet } from 'react-native';

const avatarValue = 32;

const styles = StyleSheet.create({
  headerDistribution: {
    padding: 16,
    backgroundColor: '#0F7B7E',
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
  locaTionInput: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flex: 4,
    width: Dimensions.get('window').width / 1.5,
    height: 32,
    borderRadius: Dimensions.get('window').width / 2,
  },
});

export default styles;
