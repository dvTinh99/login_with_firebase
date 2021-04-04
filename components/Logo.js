import React,{Component} from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const Logo = () =>{
  return (
    <View>
      <Image source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/4/42/Cute-Ball-Go-icon.png'}} style={{height:150, width:150}}/>
    </View>
  )
}


export default Logo;
