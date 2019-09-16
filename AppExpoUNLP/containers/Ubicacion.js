import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import {
  PermissionAware as PermissionAwareComponent,
  PermissionConstants,
} from '../components/PermisionAwareComponent/PermissionAwareComponent'

import GPSMap from '../components/Ubicacion/GPSMap'
import ManualMap from '../components/Ubicacion/ManualMap'

class UbicacionContainer extends Component {

  componentList = [
    ({
      permission:[PermissionConstants.LOCATION],
      connectionRequire:PermissionConstants.WIFI,
      component:(<GPSMap />)
    }),
    ({
      connectionRequire:PermissionConstants.WIFI,
      component:(<ManualMap />)
    }),
  ]

  render() {
    return (
      <View>
        <PermissionAwareComponent
          permissionComponentList={this.componentList}
          defaultComponent={(<Text>A</Text>)}
        />
      </View>
    )
  }

}

export default UbicacionContainer