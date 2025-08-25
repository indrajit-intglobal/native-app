import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const CartScreen = ({ navigation }) => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name} x {item.quantity}</Text>
      <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} color="#FF4500" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} color="#00BFFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  title: { fontSize: 20, color: '#FFF', textAlign: 'center' },
  item: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1E1E1E', padding: 10, marginBottom: 5, borderRadius: 5 },
  name: { color: '#FFF' },
  price: { color: '#00BFFF' },
  total: { color: '#FFF', fontSize: 18, textAlign: 'right', marginVertical: 10 },
});

export default CartScreen;