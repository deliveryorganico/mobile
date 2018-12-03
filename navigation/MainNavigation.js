import Tabs from './AppNavigator';
import Login  from '../screens/Login/Login'
import Product from '../screens/Home/Addproduct'
import {createAppContainer, createStackNavigator} from "react-navigation";
import React from "react";

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Tabs,
    Product: Product
  },
  {
    headerMode: 'Login'
  }
);

export default createAppContainer(RootStack);

