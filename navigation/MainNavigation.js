import Tabs from './AppNavigator';
import Product from '../screens/Home/Addproduct'
import {createAppContainer, createStackNavigator} from "react-navigation";
import React from "react";
import Pl from '../screens/Home/ProductList'

const RootStack = createStackNavigator(
  {
    Home: Tabs,
    Product: Product,
    Pl:Pl,
  },
    {
  headerMode: 'Login'
    }
);

export default createAppContainer(RootStack);

