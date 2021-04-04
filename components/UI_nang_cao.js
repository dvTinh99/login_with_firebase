import React from 'react';
import { SafeAreaView, View, Image, Button } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
class UI_nang_cao extends React.Component {
  state = {
    photo : null
  }
    openPicker = () => {
      const options = {
        noData : true
      }
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
            if(response.uri){
              this.setState({photo:response})
              console.log('photo1 = ', this.state.photo);
              
            }
            
          });
    };
    
    render(){
      const {photo} = this.state
      // console.log('photo2 = ', this.state.photo);
    return(
        <View>
        {photo && <Image
            source = {{uri:photo.uri}}
            style={{width:500,height:500}}
          />}
          
            
            <Button title="Chọn Ảnh" onPress={this.openPicker}/>
        </View>
    );
};
}

export default UI_nang_cao;