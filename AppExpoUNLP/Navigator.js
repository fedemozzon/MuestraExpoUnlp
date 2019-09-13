import { createStackNavigator } from 'react-navigation-stack'

import BienvenidaContainer from './containers/Bienvenida'
import FotoContainer from './containers/Foto'
import ResumenContainer from './containers/Resumen'
import UbicacionContainer from './containers/Ubicacion'

const AppNavigator = createStackNavigator({
  Bienvenida: {
    screen: BienvenidaContainer,
    navigationOptions: () => ({
      title: 'Bienvenida'
    }),
  },
  Foto: {
    screen: FotoContainer,
    navigationOptions: () => ({
      title: 'Foto'
    }),
  },
  Resumen: {
    screen: ResumenContainer,
    navigationOptions: () => ({
      title: 'Resumen'
    }),
  },
  Ubicacion: {
    screen: UbicacionContainer,
    navigationOptions: () => ({
      title: 'Ubicacion'
    }),
  },
})

export default AppNavigator