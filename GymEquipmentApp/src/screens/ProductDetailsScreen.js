import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => { addToCart(product); navigation.navigate('Cart'); }} color="#FF4500" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  image: { width: '100%', height: 250, borderRadius: 15 },
  name: { color: '#FFF', fontSize: 24, marginVertical: 10 },
  price: { color: '#00BFFF', fontSize: 20 },
  description: { color: '#CCC', marginVertical: 10 },
});

export default ProductDetailsScreen;