import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import Header from './components/Header';
//import SummaryScreen from './screens/SummaryScreen';
import SortedScreen from './screens/SortedScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  ListScreen: ListScreen,
  SortedScreen: SortedScreen,
});

const AppContainer = createAppContainer(AppNavigator);
