import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import images from '../../../../assets/images/images';
import { fetchData } from '../../../../redux/actions/product.action';
import styles from './category_carrousel.style';

class CategoryCarrouselPage extends React.Component {

  static get propTypes() { 
    return { 
        children: PropTypes.func, 
        fetchData: PropTypes.func,
        isLoading: PropTypes.bool,
        products: PropTypes.object

    }; 
}
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const Item = (data) => (
      <View style={styles.outterBackground}>
        <View style={styles.innerBackground}>
          <View>
            <View style={styles.newRow}>
              <Text style={styles.carModel}>{data.product.name}</Text>
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

    const renderItem = ({ item }) => <Item product={item} />;

    return (
      <>
        {this.props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.listBackground}
            data={this.props.products.phone}
            keyExtractor={(item) => item.name}
            horizontal={true}
            renderItem={renderItem}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.product.isFetching,
   products: state.product.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      return dispatch(fetchData());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryCarrouselPage);
