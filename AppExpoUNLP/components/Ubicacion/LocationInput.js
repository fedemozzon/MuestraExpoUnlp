import React, {Component} from 'react'
import {
  View,
  TextInput,
  Button,
} from 'react-native'

export default class LocationInput extends Component {

  state = {
    text: ''
  }

  render() {
    return(
      <View>
        <TextInput
          multiline
          onChangeText={text => this.setState(() => ({text}))}
          value={this.state.text}
          style={{
            backgroundColor: '#FFFFFF',
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
          }}
        />
        {
          this.state.text !== '' ?
            <Button title='OK' onPress={() => this.props.navigation.navigate('Resumen',{
              location: {
                text: this.state.text,
              },
              imageSrc: this.props.navigation.getParam('imageSrc', null)
            })} />
            : null
        }
      </View>
    )
  }

}