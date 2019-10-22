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
      <View style={{marginHorizontal:40, marginVertical:40}}>
        <TextInput
          placeholderTextColor='#FAFAFA'
          selectionColor='#EEEEEE'
          multiline
          onChangeText={text => this.setState(() => ({text}))}
          value={this.state.text}
          style={{
            borderColor:'blue',
            backgroundColor: '#FFFFFF',
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
            marginBottom:30,
          }}
        />
        {
          this.state.text !== '' ?
            <Button color="#7cb342" title='OK' onPress={() => this.props.navigation.navigate('Bateria',{
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