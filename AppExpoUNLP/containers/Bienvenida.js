import React, {Component} from 'react'
import { View, Text, Button, Header } from 'react-native'

class BienvenidaContainer extends Component {

  render() {
    return (
      <View style={{flex:1, flexDirection:"column", backgroundColor: "#eceff1"}}>
        <Text style={styles.titleText}>Bienvenide a 'Nombre'</Text>
        <Text style={styles.subtitleText}>Contanos con una imagen como te sentís en la Expo</Text>
        <View style={styles.comenzarButtonView}>
          <Button
            color="#7cb342"
            style={styles.comenzarButton}
            title='Comenzar'
            onPress={  () => this.props.navigation.navigate('Foto')}
          />
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
    flex:2,
    justifyContent: "center",
    alignItems: "center"
  },
  comenzarButton: {
  }
};

export default BienvenidaContainer