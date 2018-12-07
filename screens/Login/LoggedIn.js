import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Button, Loading} from './common';
import Nav from '../../navigation/MainNavigation'

export default class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: '',
            username_tmp: '',
            name_tmp: null,
            email_tmp: null,
            phone_tmp: null,
            address_tmp: null,
            city_tmp: null,
            locality_tmp: null,

        };

        AsyncStorage.getItem('username', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    username_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                username: username_tmp
            }));

        AsyncStorage.getItem('first_name', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    name_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                first_name: name_tmp
            }));

        AsyncStorage.getItem('email', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    email_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                email: email_tmp
            }));

        AsyncStorage.getItem('phone', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    phone_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                phone: phone_tmp
            }));

        AsyncStorage.getItem('address', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    address_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                address: address_tmp
            }));


        AsyncStorage.getItem('city', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    city_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                city: city_tmp
            }));

        AsyncStorage.getItem('locality', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    locality_tmp = result;
                }
            }
        })
            .then((value) => this.setState({
                locality: locality_tmp
            }));

        
    };

    render() {
        const {container, emailText, errorText} = styles;
        const {loading, username, error} = this.state;

        if (loading) {
            return (
                <View style={container}>
                    <Loading size={'large'}/>
                </View>
            )
        } else {
            return (
                <React.Fragment>
                    <Nav/>
                    <Button onPress={this.props.deleteJWT}>
                        Log Out
                    </Button>
                </React.Fragment>
            );
        }
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    emailText: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 20
    },
    errorText: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    }
};