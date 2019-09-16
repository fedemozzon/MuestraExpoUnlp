import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Constants, MapView } from 'expo'

export default class GPSMap extends Component {
  
  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
    mapVisible: true,
  }

  _getLocationAsync = async () => await Location.getCurrentPositionAsync({})
  
  _setLocation = location => this.setState({
    mapRegion:({...this.state.mapRegion,...location.coords}),
    location
  })

  _handleMapRegionChange = coords => this.setState(() => ({mapRegion:coords}))

  getMapRegion = () => this.state.mapRegion

  toggleMap = state => this.setState(() => ({mapVisible: state}))

  render() {

    return (
      <View style={styles.container}>
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          initialRegion={{...this.state.mapRegion}}
          onRegionChangeComplete={this._handleMapRegionChange}
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
      </View>
    );
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

