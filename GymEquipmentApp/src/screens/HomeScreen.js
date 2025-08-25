import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { products } from '../data/demoData';
import ProductCard from '../components/ProductCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to GymGear</Text>
        <Icon name="shopping-cart" size={24} color="#FFF" onPress={() => navigation.navigate('Cart')} />
      </View>
      <Text style={styles.subtitle}>Featured Products</Text>
      <FlatList
        data={products.slice(0, 4)}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
      <Text style={styles.subtitle} onPress={() => navigation.navigate('Shop')}>Shop All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 22, color: '#FFF' },
  subtitle: { fontSize: 18, color: '#00BFFF', marginVertical: 10 },
});

export default HomeScreen;