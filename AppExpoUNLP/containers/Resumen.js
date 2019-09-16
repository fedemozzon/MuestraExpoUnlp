import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  Button
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
              >
              <Image source={imageSrc} style={{height: 35, width:35 }}/>
              </MapView.Marker>
            </MapView>
          ) : null
        }
        <Text style={styles.aditionalText}>Y de este humor: </Text>
        <Image style={styles.image} source={imageSrc} />
        <View style={{flex:2, justifyContent: "center", alignItems: "center"}}>
          <Button color="#7cb342" onPress={() => this.props.navigation.popToTop()} title="Finalizar"/>
        </View>
      </View>
    )
  }

}
const styles = {
  main:{
    marginTop:20,
    flex:1,
    flexDirection:"column"
  },
  titleText:{
    flex:1,
    textAlign:"center",
    fontSize: 70
  },
  locationText:{
     textAlign:'center'
  },
  aditionalText:{
    textAlign: 'left', 
    fontWeight:'bold',
    marginLeft: 10,
    fontSize: 15
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