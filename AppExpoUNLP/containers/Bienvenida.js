import React, {Component} from 'react'
import { View, Text, Button, Header, Image } from 'react-native'

class BienvenidaContainer extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:"column", backgroundColor: "#eceff1"}}>
        <Text style={styles.titleText}>Bienvenide a 'Animap'</Text>
        <Text style={styles.subtitleText}>Contanos con una imagen como te sentís en la Expo</Text>
        <View style={styles.comenzarButtonView}>
          <Button
            color="#7cb342"
            title='Comenzar'
            onPress={  () => this.props.navigation.navigate('Foto')}
          />
        </View>
        <View style={styles.logosView}>
          <Image style={styles.logoImage} source={require('../assets/logos/logo-facultad.png')}/>
          <Image style={styles.logoImage} source={require('../assets/logos/logo-unlp.png')}/>
          <Image style={styles.logoImage} source={require('../assets/logos/logo-lifia.png')}/>
          <Image style={styles.logoImage} source={require('../assets/logos/logo-cic.png')}/>
        </View>
      </View>
    )
  }

}

const styles = {
  titleText: {
    flex:1,
    textAlign: "center",
    margin: 50,
    marginBottom: 0,
    fontSize: 45
  },
  subtitleText: {
    textAlign: "center",
    flex:1,
    margin: 20,
    fontSize:20,
  },
  comenzarButtonView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  logosView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    //marginBottom: -65
  },
  logoImage: {
    height: "auto",
    width: "23%",
  }
};

export default BienvenidaContainer