import React, { Component } from 'react';
import {  Text, View , StyleSheet, Image,Button, Alert, ImageBackground} from 'react-native';
 
class MyGallery extends Component{
  add= () => {Alert.alert('ME ENCANTAS <3')}

  render(){
    return(
      <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image style={styles.logo} source={require('./assets/logo.png')}/>
          </View>
        </View>
        
        <View style={styles.body}>
          <Text style={styles.message}>Bienvenido a mi galeria</Text>
          <Button color='pink' style={styles.button} title="Entrar" onPress={this.add}/>
        </View>
        
        <View style={styles.footer}>
        <Text style={styles.footerText}>Hecho con amor :3 </Text>
        </View>
      </ImageBackground> 
      
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  },
  header:{
    flex:0.2,
    flexDirection:'row',
    marginTop:200,
    justifyContent:'center',
    alignItems:'center'
  },
  headerLeft:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  footer:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:'center',
    marginBottom:10,
  },
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  logo:{
    width:150,
    height:150,
    borderRadius:50,
    resizeMode:'contain'
  },
  message:{
    color:'white',
    fontWeight:'bold',
    fontSize:23,
    marginBottom:50,
  },
  button:{
    flex:1,
    borderRadius:50,
    width:300,
    height:80,
    color:'gray',
  },
  footerText:{
    color:'gray',
  }


})

 export default MyGallery