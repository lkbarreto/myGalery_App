import React, { Component } from 'react';
import indexLogin from './src/public/login'
import Register from './src/public/register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "lkbarreto",
      Pass: "",
      logged: false
    }
  }
  

  render() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="indexLogin">
          <Stack.Screen name="indexLogin" options={{ headerShown: false }} component={indexLogin} />
          <Stack.Screen name="Register" options={{ title:'Registro' }}  component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
     
    )
  }
}

export default MyGallery 