import React, {Component} from 'react'
import { Container, Header, Content, H1, H2, H3, Text, connectStyle , Root, Button, Body} from 'native-base'

class BienvenidaContainer extends Component {

  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.titleText}>Bienvenido</Text>
          <Text style={styles.subtitleText}>Descripcion de lo que hace la aplicacion, ver que poner</Text>
        </Content>
        <Content >
          <Body style={styles.comenzarButtonBody}>
            <Button info style={{flex:1, justifyContent:"center", width:150}}>
              <Text>Comenzar!</Text>
            </Button>
          </Body>
        </Content>
      </Container>
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