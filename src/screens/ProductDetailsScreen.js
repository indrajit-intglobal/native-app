import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  image: { width: '100%', height: 200, borderRadius: 8 },
  name: { fontSize: 24, fontWeight: 'bold', marginVertical: 10 },
  price: { fontSize: 20, marginVertical: 5 },
  description: { marginVertical: 10 }
});
