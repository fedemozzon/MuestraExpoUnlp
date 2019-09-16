import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
} from 'react-native'
import MapView from 'react-native-maps'

class ResumenContainer extends Component {

  state = {
    mapRegion: { latitude: -34.00000, longitude: -64.00000, latitudeDelta: 0.5, longitudeDelta: 0.5 },
    location: null,
  }

  render() {
    const location = this.props.navigation.getParam('location', 'NO-LOCATION')
    const text = location.text
    const imageSrc = this.props.navigation.getParam('imageSrc', null)
    
    return (
      <View style={styles.main}>
        <Text style={styles.aditionalText}>Estás en: "{text}"</Text>
        {
          location.coords ? (
            <MapView style={styles.map}
              initialRegion={({...location.coords, latitudeDelta:0.5, longitudeDelta:0.5})}>
              <MapView.Marker
                coordinate={location.coords}
                title="My Marker"
                description="Some description"
              />
            </MapView>
          ) : null
        }
        <Text style={styles.aditionalText}>Y de este humor: </Text>
        <Image style={styles.image} source={imageSrc} />
      </View>
    )
  }

}
const styles = {
  main:{
    marginTop:20,
    margin:10,
  },
  locationText:{
     textAlign:'center'
  },
  aditionalText:{
    textAlign: 'left', 
    fontWeight:'bold',
    fontSize: 20,
  },
  map: {
    alignSelf: 'stretch',
    height: 200,
    margin: 20,
  },
  image: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    borderRightWidth: 10,
  }
}
export default ResumenContainer