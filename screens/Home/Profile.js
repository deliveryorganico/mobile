import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Header, ListItem} from 'react-native-elements';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: '',
            username_tmp: null,
            name_tmp: null,
            email_tmp: null,
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

        AsyncStorage.getItem('username', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    username = result;
                }
            }
        })
            .then((value) => this.setState({
                username: username_tmp
            }));

        AsyncStorage.getItem('first_name', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    first_name = result;
                }
            }
        })
            .then((value) => this.setState({
                first_name: name_tmp
            }));

        AsyncStorage.getItem('email', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    email = result;
                }
            }
        })
            .then((value) => this.setState({
                email: email_tmp
            }));

    };


    onButtonPress() {
        this.props.navigation.navigate('Direccion')
    }

    render() {
        const {loading, username, first_name, email, error} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    centerComponent={{text: 'PROFILE', style: {color: '#fff'}}}
                    //                    rightComponent={{icon: 'more-vert', color:'#fff'}}
                    outerContainerStyles={{backgroundColor: '#FFC107'}}
                />
                <ListItem
                    key="2"
                    leftIcon={{name: this.state.icons.username}}
                    title={username}/>

                <ListItem
                    leftIcon={{name: this.state.icons.name}}
                    title={first_name}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.email}}
                    title={email}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.address}}
                    title='Direccion'
                    onPress={this.onButtonPress.bind(this)}
                />
            </View>
        );
    }
}