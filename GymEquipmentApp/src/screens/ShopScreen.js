import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { products } from '../data/demoData';
import ProductCard from '../components/ProductCard';

const ShopScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shop Gym Equipment</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  title: { fontSize: 20, color: '#FFF', textAlign: 'center', margin: 10 },
});

export default ShopScreen;