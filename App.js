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
    return (
    
        <Login />
     
    )
  }
}

export default MyGallery 