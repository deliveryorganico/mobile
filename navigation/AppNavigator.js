import React from 'react';
import { StackNavigator,TabNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import { HomeScreen } from '../screens/Home/Home'
import ProfileScreen from '../screens/Home/Profile'
import { Login } from '../screens/Login/Login'


export const Tabs = createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) =>
      <Icon name="home" size={35} color={tintColor} />,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) =>
      <Icon name="person" size={35} color={tintColor} />
    }
  }
})
export default createAppContainer(Tabs);