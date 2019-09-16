import React, { Component } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import MapView from 'react-native-maps'
import DialogInput from 'react-native-dialog-input'
import * as Location from 'expo-location'

export default class ManualMap extends Component {
  
  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
    isDialogVisible: false,
  }

  componentDidMount = () => this._setLocation()
  
  _getLocation = async () => await Location.getCurrentPositionAsync({})
  
  _setLocation = () => this._getLocation().then( location =>
    this.setState({
      mapRegion:({...this.state.mapRegion,...location.coords}),
      location,
    })
  )

  handleMapRegionChange = coords => this.setState(() => ({mapRegion:coords}))

  getMapRegion = () => this.state.mapRegion

  toggleMap = state => this.setState(() => ({mapVisible: state}))

  goToResume = text => {
    this.setState(() => ({isDialogVisible:false}))
    this.props.navigation.navigate('Resumen',{
      location: {
        ...this.state.location,
        text,
      },
      imageSrc: this.props.navigation.getParam('imageSrc', null)
    })
  }

  render() {

    const {
      location
    } = this.state

    return (
      <View >
        <Text style={styles.title}>Confirme su ubicación actual</Text>
        <MapView
          style={styles.map}
          region={({...this.state.mapRegion})}
          onRegionChangeComplete={this.handleMapRegionChange}
        >
          {
            location ? (
              <MapView.Marker
                coordinate={location.coords}
                title="My Marker"
                description="Some description"
              />
            ) : null
          }
        </MapView>
        {
          location ? (
            <View>
              <Text>
                Latitud: {location.coords.latitude}
              </Text>
              <Text>
                Longitud: {location.coords.longitude}
              </Text>
            </View>
          ) : null
        }
        {
          location ?
            <Button color="#7cb342" title="Confirmar" onPress={() => this.setState(() => ({isDialogVisible:true}))} />
            : null
        }
        <DialogInput
          isDialogVisible={this.state.isDialogVisible}
          title={"Información adicional"}
          message={"Ingrese informacion adicional que ayude a determinar su ubicación"}
          submitInput={this.goToResume}
          closeDialog={() => this.setState(() => ({isDialogVisible:false}))}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    alignSelf: 'stretch',
    height: 400,
    margin: 10,
  },
  title: {
    fontSize: 20
  }
});

