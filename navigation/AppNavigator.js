import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

const App = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
  }
)

const AppNavigator = createAppContainer(App)

export default AppNavigator
