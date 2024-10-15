import { StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const Signup = () => {
    const [userInfo,setUserInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
  return (
    <View>
      <Text>Signup</Text>
        <TextInput
        placeholder='Name'
        value={userInfo.name}
        onChangeText={(text)=>setUserInfo({...userInfo,name:text})}
        />
        <TextInput
        placeholder='Email'
        value={userInfo.email}
        onChangeText={(text)=>setUserInfo({...userInfo,email:text})}
        />
        <TextInput
        placeholder='Password'
        />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})