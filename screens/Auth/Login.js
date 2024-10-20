import { View, Text } from 'react-native'
import React, { useState,useContext } from 'react'
import { TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import UserContext from '../../context/UserContext'
import { login } from '../../api/auth'
import { useMutation } from '@tanstack/react-query'
const Login = () => {
  const navigation = useNavigation();
  const [userInfo,setUserInfo] = useState({})
  const {setUser} = useContext(UserContext)
  const{mutate,isLoading} = useMutation({
    mutationKey:["login"],
    mutationFn: async()=>{
      login(userInfo)
    },
    onSuccess:()=>{
      setUser(true)
      
    }
  })
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:"bold", marginBottom:20}}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={(text)=>setUserInfo({...userInfo,username:text})} />
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={(text)=>setUserInfo({...userInfo,password:text})} />
      <TouchableOpacity style={styles.button} onPress={mutate} >
        <Text style={{color:"black",fontSize:16,}}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20}}>Already have an account? <Text style={{color:"blue"}} onPress={()=>navigation.navigate("Signup")}>Signup</Text></Text>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal:10,
    borderRadius:10,
    
  },
  button:{
    width:100,
    height:40,
    backgroundColor:"green",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
  }
});