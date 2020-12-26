import React from 'react';
import { Image, Text, View } from 'react-native';
import images from 'src/assets/images.js';
import styles from './location_bar.style';

class LocationBar extends React.Component {
  render() {
    return (
      <>
        <View style={styles.headerDistribution}>
          <View style={styles.avatarFlex}>
            <Image style={styles.AvatarStyle} source={images.Avatar} />
          </View>

          <View style={styles.locaTionInput}>
            <Text>Edit</Text>
            <Text>Edit</Text>
          </View>
        </View>
      </>
    );
  }
}

export default LocationBar;
