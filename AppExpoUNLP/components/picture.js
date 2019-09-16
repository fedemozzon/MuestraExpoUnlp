import React, { Component } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'

class PictureComponent extends Component {

  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/angry.png'))}>
            <Image
              style={{ width: 66, height: 66, margin:20}}
              source={require('../assets/angry.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/anguish.png'))}>
            <Image
              style={{ width: 66, height: 66, margin:20}}
              source={require('../assets/anguish.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/cry.png'))}>
            <Image
              style={{ width: 66, height: 66,margin:20}}
              source={require('../assets/cry.png')}
            />
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/happy.png'))}>
            <Image
              style={{ width: 66, height: 66, margin:20}}
              source={require('../assets/happy.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/lazy.png'))}>
            <Image
              style={{ width: 66, height: 66, margin:20}}
              source={require('../assets/lazy.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.setSource(require('../assets/neutral.png'))}>
            <Image
              style={{ width: 66, height: 66, margin:20}}
              source={require('../assets/neutral.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default PictureComponent