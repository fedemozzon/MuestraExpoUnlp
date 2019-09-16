import React from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Camera } from 'expo-camera'


class CameraComponent extends React.Component {

  constructor() {
    super()
    this.state = {
      type:Camera.Constants.Type.front,
      pictureTaken : false,
    }
  }

  snap = async () => {
    if(this.camera) {
      let photo = await this.camera.takePictureAsync()
      console.log({uri:photo.uri})
      this.props.setSource({uri:photo.uri})
      this.setState({pictureTaken: true})
    }
  }

  render() {
    if(!this.state.pictureTaken) {
      return (
        <View style={{ flex: 1, width:'100%', height:'50%', alignItems:'center' }}>
          <Camera style={{ flex: 1, width:'100%', height:'70%' }} type={this.state.type} ref={ref => {
          this.camera = ref; } }>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignItems:'center',
                top:230,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 50, color: 'white', marginLeft:'25%', marginRight:50  }}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={ () => {
                  this.snap()
                }}>
                <Text style={{ fontSize: 12, marginBottom: 50, color: 'white', marginRight:'25%', marginLeft:50}}> Tomar foto </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )
      } 
      return null;
  }
}

  export default CameraComponent