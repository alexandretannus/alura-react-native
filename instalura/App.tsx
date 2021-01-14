import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Feed } from './src/views/Feed';
import { Login } from './src/views/Login';

const navigator = createStackNavigator({
  Login: { screen : Login },
  Feed: { screen : Feed },
})

const AppContainer = createAppContainer(navigator)

export default function App() {  
  return (
    <AppContainer />
  );
}
