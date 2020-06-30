import React from 'react'
import { Text, View, StyleSheet, Image, TextInput, ImageBackground } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


function Register() {
    return (

        <ImageBackground source={require('../../assets/background.jpg')} style={styles.container}>
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
            </Container>
        </ImageBackground>
    )

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})

export default Register