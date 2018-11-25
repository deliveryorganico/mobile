import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import Login from './src/components/Login/LoginView';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createTabNavigator, TabBarBottom } from "react-navigation";
import {Button,BottomNavigation,ListItem} from 'react-native-material-ui';
import { Ionicons } from '@expo/vector-icons';
import AppNavigator from './screens/AppNavigator';



// export default class App extends React.Component {
//   render() {
//     return (
//       <Login/>

//       );
//     }
//   }
export  class LoginScreen extends React.Component {
  render() {
    return (
      <Login/>
      );
    }
  }
  
  class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerLeft: null,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#FFC107',
      },
    };
    render() {
      return (
        <View>
        </View>
        )
      }
    }

    const RootStack = createStackNavigator(
      {
        Login: LoginScreen,
        Home: HomeScreen,
      },
      {
        initialRouteName: 'Home',
      }
      );
      
      const AppContainer = createAppContainer(RootStack);
      export default class App extends React.Component {
        render() {
          return <AppContainer />;
          
        }
     }
      