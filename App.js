import React, { Component } from 'react';
import Login from './src/public/login'
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
  

  isLogged=() =>{
    this.setState({
      logged: true
    })
  }
  

  render() {
    const Stack = createStackNavigator();
    return (
            <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="Register" options={{ title:'Registro' }}  component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
     
    )
  }
}

export default MyGallery 