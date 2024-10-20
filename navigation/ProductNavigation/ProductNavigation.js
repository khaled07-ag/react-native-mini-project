import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home';
import ItemDetails from '../../screens/ItemDetails';
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Home'  >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item Details" component={ItemDetails} />
    </Stack.Navigator>
  )
}

export default ProductNavigation

const styles = StyleSheet.create({})