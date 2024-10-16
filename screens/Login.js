import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation();
  const [userInfo,setUserInfo] = useState({
    username:"",
    password:"",
  })
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,fontWeight:"bold", marginBottom:20}}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />
      <TouchableOpacity style={styles.button}  >
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