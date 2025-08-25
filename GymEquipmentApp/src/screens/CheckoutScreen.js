import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { CartContext } from '../context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { totalPrice, setCartItems } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  const handleCheckout = () => {
    Alert.alert('Order Placed', 'Your order has been placed successfully!');
    setCartItems([]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
      <TextInput style={styles.input} placeholder="Shipping Address" value={address} onChangeText={setAddress} />
      <TextInput style={styles.input} placeholder="Payment Details (Dummy)" value={payment} onChangeText={setPayment} />
      <Button title="Place Order" onPress={handleCheckout} color="#FF4500" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 20, color: '#FFF', textAlign: 'center' },
  total: { color: '#00BFFF', fontSize: 18, marginVertical: 10 },
  input: { backgroundColor: '#333', color: '#FFF', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default CheckoutScreen;