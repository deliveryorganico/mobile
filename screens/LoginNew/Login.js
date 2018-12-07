import React, {Component, Fragment} from 'react';
import {Text, View} from 'react-native';
import {Button, Input, TextLink} from './common';
import axios from 'axios';
import deviceStorage from '../../services/deviceStorage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: false
        };
        this.loginUser = this.loginUser.bind(this);
        // this.onLoginFail = this.onLoginFail.bind(this);
    }

    loginUser() {
        const {username, password} = this.state;

        this.setState({error: '', loading: false});

        // NOTE Post to HTTPS only in production
        axios.post("http://192.168.0.171:8000/auth/obtain_token/", {
            username: username,
            password: password
        })
            .then((response) => {
                console.log(response.data.user.username)
                deviceStorage.saveItem("id_token", response.data.token);
                deviceStorage.saveItem("username", response.data.user.username);
                this.props.newJWT(response.data);
            })
            .catch((error) => {
                console.log('error', error.response);
                this.onLoginFail();
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Error en el login!!!!!!!',
            loading: false
        });
    }

    render() {
        const {username, password, error, loading} = this.state;
        const {form, section, errorTextStyle} = styles;

        return (
            <Fragment>
                <View style={form}>
                    <View style={section}>
                        <Input
                            placeholder="pepe"
                            label="Username"
                            value={username}
                            onChangeText={username => this.setState({username})}
                        />
                    </View>

                    <View style={section}>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
                            value={password}
                            onChangeText={password => this.setState({password})}
                        />
                    </View>

                    <Text style={errorTextStyle}>
                        {error}
                    </Text>
                    <Button onPress={this.loginUser}>
                        Login
                    </Button>
                </View>
                <TextLink onPress={this.props.authSwitch}>
                    Registrate! brou
                </TextLink>
            </Fragment>
        );
    }
}

const styles = {
    form: {
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    section: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 18,
        color: 'red'
    }
};

export {Login};