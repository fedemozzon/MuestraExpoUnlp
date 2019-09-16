import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'

class BienvenidaContainer extends Component {

  render() {
    return (
      <View>
        <Text style={styles.titleText}>Bienvenido</Text>
        <Text style={styles.subtitleText}>Descripcion de lo que hace la aplicacion, ver que poner</Text>
        <Button
          info
          style={{flex:1, justifyContent:"center", width:150}}
          title='Comenzar'
          onPress={  () => this.props.navigation.navigate('Ubicacion')}
        />
      </View>
    )
  }

}

const styles = {
  titleText: {
    flex: 1,
    textAlign: "center",
    margin: 50,
    marginBottom: 0,
    fontSize: 45
  },
  subtitleText: {
    textAlign: "center",
    margin: 20,
    fontSize:20,
  },
  comenzarButtonBody: {
    flex:1, 
    justifyContent:"center"
  },
  comenzarButton: {
    width: 115,
    textAlign:"center"
  }
};

export default BienvenidaContainer