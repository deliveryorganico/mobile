import React from 'react'
import { StyleSheet, Text, View, Image, Modal, TouchableHighlight} from 'react-native'
import { Header, Card, ListItem, Button, SearchBar, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from "react-navigation";
export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    state = {
        modalVisible: false,
      };
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        return (
            <React.Fragment>
            <Header
            centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
            outerContainerStyles={{ backgroundColor: '#FFC107' }}
            rightComponent={{ icon: 'add', color: '#fff', onPress: () => {this.setModalVisible(true)} }}
            />
            <SearchBar
            lightTheme
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...' 
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
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                 }}>

                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                         onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        }}>
                     <Text>Hide Modal</Text>
                </TouchableHighlight>
                    </View>
                 </View>
            </Modal>
            </React.Fragment>
            );
        }
    }