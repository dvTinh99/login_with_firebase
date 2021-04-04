import React,{Component} from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'
import LoginForm from './LoginForm'
import Articles from './Articles'
// import firebase from 'firebase'
import Firebase from './firebase.js'
class App extends Component{
 
  state={
    loggedIn:null
    // loggedIn:true
  }

  componentDidMount(){
     Firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false: 
        return <LoginForm/>        
      case true:
        return <Articles/>
    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default App;
