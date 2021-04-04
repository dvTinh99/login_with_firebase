import React,{Component} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Firebase from './firebase.js'
class Articles extends Component{
  onLogOut = () =>{
    Firebase.auth().signOut()
  }
  render(){
  return (
    <View style ={styles.container}>
      <Text>Logined</Text>
    
    <TouchableOpacity style={{padding:10}} onPress={this.onLogOut}>
      <Text>Logout</Text>
    </TouchableOpacity>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default Articles;
