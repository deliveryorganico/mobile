import Tabs from './AppNavigator';
import Product from '../screens/Home/Addproduct'
import {createAppContainer, createStackNavigator} from "react-navigation";
import React from "react";
import Profile from '../screens/Home/Profile'
import Direccion from '../screens/Home/Direccion'

const RootStack = createStackNavigator(
  {
    Home: Tabs,
    Product: Product,
    Profile: Profile,
    Direccion: Direccion,
  },
    {
  headerMode: 'Home'
    }
);

export default createAppContainer(RootStack);

