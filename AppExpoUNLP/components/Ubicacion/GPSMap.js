import React, { Component } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import MapView from 'react-native-maps'
import DialogInput from 'react-native-dialog-input'
import * as Location from 'expo-location'

export default class ManualMap extends Component {
  
  state = {
    mapRegion: { latitude: -34.90300, longitude: -57.9380000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
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

    return (
      <View >
        <Text style={styles.title}>Confirme su ubicación actual</Text>
        <MapView
          style={styles.map}
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
        {
          this.state.location ? (
            <View>
              <Text>
                Latitud: {this.state.location.coords.latitude}
              </Text>
              <Text>
                Longitud: {this.state.location.coords.longitude}
              </Text>
            </View>
          ) : null
        }
        {
          this.state.location ?
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
    height: 350,
    margin: 10,
  },
  title: {
    fontSize: 20
  }
});

