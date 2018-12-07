import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Button, Loading} from './common';
import Tabs from '../../navigation/AppNavigator'

export default class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: '',
            username_tmp: '',
        }

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
                    <Tabs/>
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