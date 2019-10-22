import React, {Component} from 'react'
import {
  View,
  Text,
  
} from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from '../components/PermisionAwareComponent/PermissionAwareComponent'

import GPSMap from '../components/Ubicacion/GPSMap'
import ManualMap from '../components/Ubicacion/ManualMap'
import LocationInput from '../components/Ubicacion/LocationInput'

class UbicacionContainer extends Component {

  componentList = [
    ({
      permission:[PermissionConstants.LOCATION],
      connectionRequire:PermissionConstants.WIFI,
      battteryLevelRequire: -1,
      component:(<GPSMap navigation={this.props.navigation} />)
    }),
    ({
      permission:undefined,
      connectionRequire:PermissionConstants.WIFI,
      battteryLevelRequire: -1,
      component:(<ManualMap navigation={this.props.navigation} />)
    }),
  ]

  render() {
    return (
      <View>
        <PermissionAwareComponent
          permissionComponentList={this.componentList}
          defaultComponent={(<LocationInput navigation={this.props.navigation} />)}
        />
      </View>
    )
  }

}

export default UbicacionContainer