import React,{Component} from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Logo from './Logo'
import EmailAndPass from './EmailAndPass'
const LoginForm = () =>{
  return (
    <View style ={styles.container}>
      <View style ={styles.logoContainer}>
        <Logo/>
      </View>

      <View style ={styles.EmailAndPass}>
        <EmailAndPass/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  logoContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  EmailAndPass:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
});

export default LoginForm;
