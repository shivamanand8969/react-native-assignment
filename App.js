import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './src/screen/ProductListScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ProductList" component={ProductListScreen}  options={{ title: 'Products' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}