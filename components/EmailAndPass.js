import React, { Component } from 'react'
import { Text, View,StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Firebase from './firebase.js'
class EmailAndPass extends Component {
  state={
    email:'',
    password:'',
    error:'',
    loadding:false
  }

  onBottomPress = ()=>{
    Firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
    .then(this.onLoginSuccess)
    .catch(err =>{
      this.setState({
        error:err.message
      })
    })
  }
  onLoginSuccess = () =>{
    this.setState({
      error:'',
      loading:false
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        placeholder="email" 
        style= {styles.input} 
        value={this.state.email}
        onChangeText={email=>this.setState({email})}
        />

        <TextInput 
        placeholder="pasword" 
        style= {styles.input}
        secureTextEntry
        value={this.state.password}
        onChangeText={password=>this.setState({password})}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>
            {this.state.error}
          </Text>
      </View>
    )
  }
}
//---------------
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
  height:40
  },
  errorText:{
    fontSize:25,
    color:'red',
    alignSelf:'center',
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:20
  },
  buttonContainer:{
    backgroundColor:'#383898',
    padding: 15,
    borderRadius:8
  }
});

export default EmailAndPass;