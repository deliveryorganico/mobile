import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { Header, Card, ListItem, Button } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <React.Fragment>
                <Header
                    centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
                <Card
                    title='Banana'
                    image={require('../images/banana.jpg')}>
                    <Text style={{marginBottom: 10}}>
                    Probando
                    </Text>
                    <Button
                    icon={{name: 'shopping-cart'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='COMPRAR' />
                </Card>
            </React.Fragment>
            );
        }
    }