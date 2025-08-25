import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator(){
  return (
    <Tab.Navigator screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopWidth: 0, elevation: 10 },
      tabBarIcon: ({ focused, size }) => {
        const map = {
          Home: 'home',
          Shop: 'fitness',
          Cart: 'cart',
          Profile: 'person'
        } as any;
        const icon = map[route.name] || 'ellipse';
        return <Ionicons name={focused ? icon : `${icon}-outline`} size={size} />;
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: true, headerTitle: 'Cart' }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function AuthNavigator(){
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

export default function App(){
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack.Navigator>
          <RootStack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
          <RootStack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
          <RootStack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Product' }} />
          <RootStack.Screen name="Checkout" component={CheckoutScreen} />
          <RootStack.Screen name="Orders" component={OrdersScreen} />
          <RootStack.Screen name="Search" component={SearchScreen} options={{ presentation: 'modal', title: 'Search' }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
