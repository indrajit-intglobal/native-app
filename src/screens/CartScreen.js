import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../slices/cartSlice';

export default function CartScreen({ navigation }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} x{item.quantity}</Text>
            <Button title="Remove" onPress={() => dispatch(removeFromCart(item.id))} />
          </View>
        )}
      />
      {items.length > 0 ? (
        <>
          <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
          <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
        </>
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }
});
