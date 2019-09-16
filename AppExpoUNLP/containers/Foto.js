import React, {Component} from 'react'
import {
  View,StyleSheet,Image
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

  render() {
    const {
      imageSrc,
    } = this.state

    return (
      <View style={styles.container}>
        <PermissionAwareComponent
          permissionComponentList={[
            ({
              permission:PermissionConstants.CAMERA,
              component:(<CameraComponent setSource={this.setSource} />)
            }),
          ]}
          defaultComponent={(<PictureComponent setSource={this.setSource} />)}
        />
        {
          (imageSrc !== null) ? (<Image style={styles.image} source={imageSrc} />) : null
        }
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
    width:'70%',
    height:'70%',
  }
})

export default FotoContainer