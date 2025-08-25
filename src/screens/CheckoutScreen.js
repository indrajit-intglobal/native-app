import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';

export default function CheckoutScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(clearCart());
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text>Payment integration demo only</Text>
      <Button title="Place Order" onPress={handleCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});
