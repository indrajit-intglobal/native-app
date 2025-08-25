import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';

export default function CartScreen({ navigation }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View style={{ flex:1, padding:20 }}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection:'row', justifyContent:'space-between', marginBottom:10 }}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
          </View>
        )}
      />
      {cart.length > 0 && (
        <>
          <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
          <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
        </>
      )}
    </View>
  );
}