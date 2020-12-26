import React from 'react';
import { Image, Text, View } from 'react-native';
import images from 'src/assets/images.js';
import styles from './location_bar.style';

class LocationBar extends React.Component {
  render() {
    
    return (
      <>
        <View style={styles.headerDistribution}>
          <Image source={images.Avatar}/>
          <Text>Edit</Text>
          <Text>Edit</Text>
        </View>
      </>
    );
  }
}

export default LocationBar;
