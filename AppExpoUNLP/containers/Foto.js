import React, {Component} from 'react'
import {
  View,StyleSheet,Image,Button
} from 'react-native'
import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from '../components/PermisionAwareComponent/PermissionAwareComponent'
import CameraComponent from '../components/camera'
import PictureComponent from '../components/picture'

class FotoContainer extends Component {

  constructor() {
    super()
    this.state = {
      imageSrc: null,
    }
  }

  setSource = (imageSrc) => this.setState(() => ({imageSrc}))

  componentList = [
    ({
      permission:PermissionConstants.CAMERA,
      battteryLevelRequire:PermissionConstants.NO_POWER_SAVER,
      component:(<CameraComponent setSource={this.setSource} />)
    }),
  ]

  render() {
    const {
      imageSrc,
    } = this.state
    
    return (
      <View style={styles.container}>
        <PermissionAwareComponent
          permissionComponentList={this.componentList}
          defaultComponent={(<PictureComponent setSource={this.setSource} />)}
        />
        {
          (imageSrc !== null) ? (<Image style={styles.image} source={imageSrc} />) : null
        }
        {(imageSrc) ?(
        <Button
          info
          color="#7cb342"
          style={{flex:1, justifyContent:"center", width:150}}
          title='Siguiente'
          onPress={  () => this.props.navigation.navigate('Ubicacion',{imageSrc})}
        />): null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width:90,
    height:90,
    marginBottom: 60,
  }
})

export default FotoContainer