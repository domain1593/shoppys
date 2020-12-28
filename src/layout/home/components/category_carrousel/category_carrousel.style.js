import { Dimensions, StyleSheet } from 'react-native';
import shoppysTheme from '../../../../assets/theme/theme';

const styles = StyleSheet.create({
  listBackground: {
    backgroundColor: shoppysTheme.white.neutral,
  },
  outterBackground: {
    backgroundColor: shoppysTheme.white.neutral,
    height: Dimensions.get('window').height / 2.5,
    width: Dimensions.get('window').width / 2,
    margin: 12,
    borderRadius: 20,
  },
  innerBackground: {
    backgroundColor: shoppysTheme.light.neutral,
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 2.3,
    margin: 12,
    zIndex: 0,
    borderRadius: 20,
  },
  carImage: {
    width: Dimensions.get('window').width / 2,
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 6,
    marginLeft: -12,
  },
  newRow: {
    flexDirection: 'row',
  },
  carModel: {
    flex: 3,
    paddingLeft: 8,
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  carBrand: {
    flex: 3,
    paddingLeft: 8,
    paddingTop: 0,
    textAlign: 'left',
    fontSize: 14,
  },
  dayCuota: {
    flex: 3,
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'right',
    fontSize: 14,
  },
  carPrice: {
    flex: 3,
    paddingTop: 8,
    paddingRight: 8,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carRating: {
    paddingLeft: 8,
    paddingTop: 0,
    textAlign: 'left',
    fontSize: 14,
  },
  starIcon: {
    paddingLeft: 8
  },
  carReviews: {
    paddingLeft: 8,
    color: shoppysTheme.secondary.neutral
  },
  carDetails: {
    flex: 6,
    paddingTop: 8,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default styles;
