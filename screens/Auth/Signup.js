import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState,useContext } from 'react'
import { signup } from '../../api/auth'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import UserContext from '../../context/UserContext'
import { storeToken } from '../../api/storage'
const SignUp = () => {
  const navigation = useNavigation();
    const [userInfo,setUserInfo] = useState({})
    const {setUser} = useContext(UserContext)
  const{mutate,isLoading} = useMutation({
    mutationKey:["signup"],
    mutationFn: async()=>{
      signup(userInfo)
    },
    onSuccess:()=>{
      setUser(true)
      
    }
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
        placeholder='First Name'
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        onChangeText={(text)=>setUserInfo({...userInfo,firstName:text})}
        
        />
        <TextInput
        placeholder='Last Name'
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        onChangeText={(text)=>setUserInfo({...userInfo,lastName:text})}
        />
        <TextInput
        placeholder='Phone Number'
        style={{
            width:"80%",
            height:40,
            borderWidth:1,
            borderColor:"#000",
            borderRadius:10,
            paddingHorizontal:10,
            marginVertical:10,
        }}
        onChangeText={(text)=>setUserInfo({...userInfo,phoneNumber:text})}
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
        onChangeText={(text)=>setUserInfo({...userInfo,password:text})}
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
        onPress={mutate}
        >
            <Text>Signup</Text>
        </TouchableOpacity>
        
        </View>
        <Text style={{marginTop:20}}>Already have an account? <Text style={{color:"blue"}} onPress={()=>navigation.navigate("Login")}>Login</Text></Text>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})