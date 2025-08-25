import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { store } from './src/store';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Shop" component={ShopScreen} />
          <RootStack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          <RootStack.Screen name="Cart" component={CartScreen} />
          <RootStack.Screen name="Checkout" component={CheckoutScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
