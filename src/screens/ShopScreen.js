import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { products } from '../data/products';

export default function ShopScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text>${item.price}</Text>
          <Button title="View" onPress={() => navigation.navigate('ProductDetails', { product: item })} />
          <Button title="Add to Cart" onPress={() => dispatch(addToCart(item))} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#f9f9f9', borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 5 }
});
