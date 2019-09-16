import React, { Component } from 'react'
import { Button } from 'react-native'
import { Location } from 'expo'

export default class GPSLocComponent extends Component {

  componentDidMount = () => {
    this.props.toggleMap(true)
    this._getLocationAsync().then(this.props._setLocation)
  }

  _getLocationAsync = async () => await Location.getCurrentPositionAsync({})

  render() {
    return (
      <Button title="A casa" onPress={()=>this._getLocationAsync().then(this.props._setLocation)}/>
    )
  }

}