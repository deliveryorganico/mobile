import Tabs from './AppNavigator';
import Login from '../screens/Login/Login'
import Product from '../screens/Home/Addproduct'
import {createAppContainer, createStackNavigator} from "react-navigation";
import React from "react";
import Pl from '../screens/Home/ProductList'

const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Tabs,
    Product: Product,
    Pl:Pl,
  },
    {
  headerMode: 'Login'
    }
);

export default createAppContainer(RootStack);

