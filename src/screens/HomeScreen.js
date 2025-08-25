import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:22, fontWeight:'bold' }}>Welcome to GymShop</Text>
      <Button title="Go to Shop" onPress={() => navigation.navigate('Shop')} />
    </View>
  );
}