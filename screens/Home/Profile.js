import React from 'react';
import axios from 'axios';
import { Image, Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: null,
                name: null,
                email: null,
                phone: null,
                address: null,
                st_number: null,
                city: null,
                locality: null,
                floor: null,
                zip_code: null,
                photo: null
            },
            icons: {
                username: 'person',
                name: 'person',
                email: 'email',
                phone: 'call',
                address: 'domain',
                st_number: 'stars',
                city: 'place',
                locality: 'explore',
                floor: 'stars',
                zip_code: 'domain',
                photo: '',
            }
        };
    }
    componentDidMount() {
        axios
            .get('http://192.168.1.8:8000/rest/profile/2/')
            .then(response => {
                console.log(response.data);
                this.setState({
                    user: {
                        username: response.data.username,
                        name: response.data.first_name + ' ' + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone,
                        address: response.data.address,
                        st_number: response.data.st_number,
                        city: response.data.city,
                        locality: response.data.locality,
                        zip_code: response.data.zip_code,
                        floor: response.data.floor,
                        photo: response.data.photo
                    } 
                })           
            })
            .catch(error => {
                console.log(error);
            })
    }

    onButtonPress(){
        this.props.navigator.push({
            id: 'Direccion'
        });
    }

	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
//                    rightComponent={{icon: 'more-vert', color:'#fff'}}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
                <ListItem 
                    key="2"
                    leftIcon={{ name: this.state.icons.username }}
                    title={ this.state.user.username }/>
                <ListItem
                    leftIcon={{ name: this.state.icons.name }}
                    title={ this.state.user.name }
                />
                <ListItem
                    leftIcon={{ name: this.state.icons.email }}
                    title={ this.state.user.email } 
                />
                <ListItem
                    leftIcon={{ name: this.state.icons.address }}
                    title= 'Direccion'
                    onPress={this.onButtonPress.bind(this)}
                />
            </View>
		);
	}
}