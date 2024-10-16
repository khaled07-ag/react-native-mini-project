import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthNavigation from './AuthNavigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductNavigation from './ProductNavigation';
import Profile from '../screens/Profile';
const MainNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
    }} >
        <Tab.Screen name="Product" component={ProductNavigation}  options={{
            tabBarIcon:()=>{
             return <Ionicons name='home' size={24} color='black' />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }}/>
        <Tab.Screen name="Auth" component={AuthNavigation} options={{
            tabBarIcon:()=>{
             return <FontAwesome name='sign-in' size={24} color='black' />

            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            headerShown:true,
            tabBarIcon:()=>{
             return <FontAwesome name='user' size={24} color='black' />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',

            
        }}/>
    </Tab.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})