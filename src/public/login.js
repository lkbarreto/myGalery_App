import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../private/home';





function Login({ navigation }) {
  return (

    <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>BIENVENIDO A MI GALERIA</Text>
        <TextInput placeholder="Usuario" style={styles.imput}></TextInput>
        <TextInput placeholder="Contraseña" style={styles.imput}></TextInput>


        <Button
          title="ENTRAR "
          type="clear"
          containerStyle={styles.button}
          icon={
            <Icon
              name="arrow-right"
              size={15}
              color="gray"
            />
          }
          iconRight
          onPress={() => navigation.navigate('Home')}
        />
        <Button
        containerStyle={styles.button}
          title="Registro"
          type="clear"
          onPress={() => navigation.navigate('Register')}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Hecho con amor :3 </Text>
      </View>
    </ImageBackground>
  )

}

const Drawer = createDrawerNavigator();

export default function indexLogin() {
  return (
    
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    marginBottom: 10,
  },
  body: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  footerText: {
    color: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,

  },
  imput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    padding: 5,
    marginTop: 10,
    width: 250,
    color: 'white',
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    width: 200,
    color: 'white',
    marginTop: 30,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'


  }
})
