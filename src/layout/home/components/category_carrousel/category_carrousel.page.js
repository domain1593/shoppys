import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import images from '../../../../assets/images/images';
import styles from './category_carrousel.style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d322372',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724222',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72123',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7233',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7232',
    title: 'Third Item',
  },
];

class CategoryCarrouselPage extends React.Component {
  render() {
    const Item = () => (
      <View style={styles.outterBackground}>
        <View style={styles.innerBackground}>
          <View>
            <View style={styles.newRow}>
              <Text style={styles.carModel}>A5</Text>
              <Text style={styles.carPrice}>$400</Text>
            </View>
            <View style={styles.newRow}>
              <Text style={styles.carBrand}>Audi</Text>
              <Text style={styles.dayCuota}>/day</Text>
            </View>
            <View>
              <Image style={styles.carImage} source={images.a5} />
            </View>
            <View style={styles.newRow}>
              <Icon
                name="star"
                type="material"
                size={18}
                color="#777777"
                containerStyle={styles.starIcon}
              ></Icon>
              <Text style={styles.carRating}>5.0</Text>
              <Text style={styles.carReviews}>(30)</Text>
            </View>
            <View style={styles.newRow}>
              <Text style={styles.carDetails}>Details</Text>
            </View>
          </View>
        </View>
      </View>
    );

    const renderItem = ({ item }) => <Item title={item.title} />;

    return (
      <>
        <FlatList
          style={styles.listBackground}
          data={DATA}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </>
    );
  }
}

export default CategoryCarrouselPage;
