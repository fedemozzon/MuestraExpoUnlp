import { createStackNavigator } from 'react-navigation-stack'

import BienvenidaContainer from './containers/Bienvenida'
import FotoContainer from './containers/Foto'
import ResumenContainer from './containers/Resumen'
import UbicacionContainer from './containers/Ubicacion'

const AppNavigator = createStackNavigator({
  Bienvenida: {
    screen: BienvenidaContainer,
    navigationOptions: () => ({
      title: 'Bienvenida',
      headerStyle:styles.header,
    }),
  },
  Foto: {
    screen: FotoContainer,
    navigationOptions: () => ({
      title: 'Como te sentís',
      headerStyle:styles.header,
    }),
  },
  Resumen: {
    screen: ResumenContainer,
    navigationOptions: () => ({
      title: 'Resumen',
      headerStyle:styles.header,
    }),
  },
  Ubicacion: {
    screen: UbicacionContainer,
    navigationOptions: () => ({
      title: 'Ubicacion',
      headerStyle:styles.header,
    }),
  }})


const styles = {
  header: {
    backgroundColor: "#7cb342"
  }
};

export default AppNavigator