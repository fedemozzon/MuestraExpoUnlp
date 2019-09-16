import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import MapView from 'react-native-maps'

export default class ManualMap extends Component {
  
  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
  }
  
  _getLocation = (coords) => ({coords})
  
  _setLocation = location => this.setState({
    mapRegion:({...this.state.mapRegion,...location.coords}),
    location
  })

  handleMapRegionChange = coords => this.setState(() => ({mapRegion:coords}))

  getMapRegion = () => this.state.mapRegion

  toggleMap = state => this.setState(() => ({mapVisible: state}))

  render() {

    return (
      <View >
        <MapView
          style={{ alignSelf: 'stretch', height: 400 }}
          initialRegion={{...this.state.mapRegion}}
          onRegionChange={this.handleMapRegionChange}
        >
          {
            this.state.location ? (
              <MapView.Marker
                coordinate={this.state.location.coords}
                title="My Marker"
                description="Some description"
              />
            ) : null
          }
        </MapView>
        <Button title="Ok" onPress={()=> this._setLocation(this._getLocation(this.state.mapRegion))} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height: '100%',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

