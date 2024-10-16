import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
  const navigation = useNavigation();
    const [userInfo,setUserInfo] = useState({
        name:"",
        email:"",
        password:"",
    })
  return (
    <View
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }}
    >
      <Text style={{fontSize:20,fontWeight:"bold", marginBottom:20}}>Signup</Text>
        <TextInput
        placeholder='Username'
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        
        />
        <TextInput
        placeholder='Email'
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        />
        <TextInput
        placeholder='Password'
        secureTextEntry={true}
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        />
        <View style={{
            width:"80%",
            height:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        }}>
        <TouchableOpacity
        style={{
            width:100,
            height:40,
            backgroundColor:"green",
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center",
        }}
        >
            <Text>Signup</Text>
        </TouchableOpacity>
        
        </View>
        <Text style={{marginTop:20}}>Already have an account? <Text style={{color:"blue"}} onPress={()=>navigation.navigate("Login")}>Login</Text></Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})