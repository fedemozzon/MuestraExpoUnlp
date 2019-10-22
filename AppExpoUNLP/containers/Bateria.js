import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'
import {
    PermissionAware as PermissionAwareComponent,
    PermissionConstants,
  } from '../components/PermisionAwareComponent/PermissionAwareComponent'

export default class BateriaContainer extends Component {
    componentList = [
        ({
          permission:PermissionConstants.CALENDAR,
          connectionRequire:PermissionConstants.ANY,
          battteryLevelRequire: 0.15,
          component:(<Text>BATERIA SUFICIENTE</Text>)
        }),
      ]
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column", backgroundColor: "#eceff1" }}>
                <Text style={styles.titleText}>MANEJO DE BATERIA</Text>
                <Text style={styles.subtitleText}>MANEJO DE BATERIA</Text>
                <PermissionAwareComponent
                    permissionComponentList={this.componentList}
                    defaultComponent={(<Text>POCA BATERIA.</Text>)}    
                />
                <View style={styles.comenzarButtonView}>
                    <Button
                        color="#7cb342"
                        title='Comenzar'
                        onPress={() => this.props.navigation.navigate('Resumen', {
                            location: {
                                text: this.props.navigation.getParam('location', null).text
                            },
                            imageSrc: this.props.navigation.getParam('imageSrc', null)
                        })}
                    />
                </View>
                <View style={styles.logosView}>
                    
                </View>
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
        flex: 1,
        margin: 20,
        fontSize: 20,
    },
    comenzarButtonView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logosView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        //marginBottom: -65
    },
    logoImageCIC: {
        height: "60%",
        width: "23%",
    },
    logoImageInfo: {
        height: "25%",
        width: "24%",
    },
    logoImageLifia: {
        height: "25%",
        width: "23%",
    },
    logoImageUNLP: {
        height: "40%",
        width: "25%",
    },
};

