import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CategoryCarrouselPage from './components/category_carrousel/category_carrousel.page';
import LocationBarPage from './components/location_bar/location_bar.page';
import styles from './home.style';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            <LocationBarPage />
            <CategoryCarrouselPage />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default HomePage;
