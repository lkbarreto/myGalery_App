import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Label>Este es el home</Label>
      </Content>
    </Container>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default Home