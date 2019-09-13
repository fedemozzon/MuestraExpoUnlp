import React, {Component} from 'react'
import {
  View,
} from 'react-native'

// import {
//   PermissionAware as PermissionAwareComponent,
//   PermissionConstants,
// } from 'permission_aware_react_native_component'

class UbicacionContainer extends Component {

  // componentList = [
  //   ({
  //     permission:[PermissionConstants.LOCATION],
  //     connectionRequire:PermissionConstants.WIFI,
  //     component:(<GPSMap />)
  //   }),
  //   ({
  //     connectionRequire:PermissionConstants.WIFI,
  //     component:(<ManualMap />)
  //   }),
  // ]

  render() {
    return (
      <View>
        {/* <PermissionAwareComponent
          permissionComponentList={componentList}
          defaultComponent={(<TextInputLoc />)}
        /> */}
      </View>
    )
  }

}

export default UbicacionContainer