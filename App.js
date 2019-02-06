import { AppLoading, Font } from 'expo'
import React, { Component } from 'react'
import Roboto from 'native-base/Fonts/Roboto.ttf'
import RobotoMedium from 'native-base/Fonts/Roboto_medium.ttf'
import Ionicons from '@expo/vector-icons/fonts/Ionicons.ttf'
import AppNavigator from './navigation/AppNavigator'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
    }
  }

  componentWillMount() {
    this.loadFonts()
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto,
      Ionicons,
      Roboto_medium: RobotoMedium,
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <AppNavigator />
    )
  }
}
