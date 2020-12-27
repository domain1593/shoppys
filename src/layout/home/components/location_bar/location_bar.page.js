import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';
import images from '../../../../assets/images/images';
import styles from './location_bar.style';

class LocationBar extends React.Component {
  render() {
    return (
      <>
        <View style={styles.headerDistribution}>
          <View style={styles.avatarFlex}>
            <Image style={styles.AvatarStyle} source={images.Avatar} />
          </View>

          <View style={styles.locaTionBox}>
            <Icon
              name="location-sharp"
              type="ionicon"
              size={18}
              color="#777777"
              containerStyle={styles.locationIcon}
            ></Icon>
            <TextInput
              style={styles.locationInput}
              placeholder="Edit"
            ></TextInput>
          </View>
        </View>
      </>
    );
  }
}

export default LocationBar;
