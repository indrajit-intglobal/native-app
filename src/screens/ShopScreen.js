import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { products } from '../data/products';

export default function ShopScreen({ navigation }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
          <View style={{ padding:10, flexDirection:'row', alignItems:'center' }}>
            <Image source={{ uri: item.image }} style={{ width:80, height:80, marginRight:10 }} />
            <View>
              <Text style={{ fontSize:18 }}>{item.name}</Text>
              <Text>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}