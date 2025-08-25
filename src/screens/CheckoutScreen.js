import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/cartSlice';

export default function CheckoutScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22 }}>Checkout Successful 🎉</Text>
      <Button title="Back to Home" onPress={() => {
        dispatch(clearCart());
        navigation.navigate('Home');
      }} />
    </View>
  );
}