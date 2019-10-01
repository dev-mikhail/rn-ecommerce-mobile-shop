import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import themes from '../styles/theme.style';
const Route = createStackNavigator(
  {
    Products: { screen: Products },
    Checkout: { screen: Checkout },
    Receipt: { screen: Receipt }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: themes.BACKGROUND_COLOR,
        paddingHorizontal: 10,
      },
      headerTintColor: '#fff'
    }
  }
);
export default createAppContainer(Route);