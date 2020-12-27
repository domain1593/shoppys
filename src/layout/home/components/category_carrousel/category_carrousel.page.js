import React from 'react';
import { FlatList, Text, View } from 'react-native';
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
    const Item = ({ title }) => (
      <View style={styles.itemBackground}>
        <Text style={styles.title}>{title}</Text>
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
