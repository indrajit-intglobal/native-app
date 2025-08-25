import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const dispatch = useDispatch();
  return (
    <View style={{ flex:1, padding:20 }}>
      <Image source={{ uri: product.image }} style={{ width:'100%', height:200 }} />
      <Text style={{ fontSize:22, marginVertical:10 }}>{product.name}</Text>
      <Text style={{ fontSize:18, marginBottom:20 }}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => dispatch(addToCart(product))} />
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}