import React, { Component } from 'react';
import {  Text, View , StyleSheet, Image,Button, Alert, ImageBackground} from 'react-native';
import AppLayout from './src/appLayout'
import Login from './src/public/login'
class MyGallery extends Component{
  constructor(props){
    super(props);
    this.state={
      user:"lkbarreto",
      Pass:"",
      logged:false
    }
  }
  render(){
    return(

      
          <Login/>

    )
  }
}
 export default MyGallery