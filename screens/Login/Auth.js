import React from 'react';
import {View} from 'react-native';
import {Login} from './Login';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false
        };
        this.whichForm = this.whichForm.bind(this);
        this.authSwitch = this.authSwitch.bind(this);
    }

    authSwitch() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    whichForm() {
        if (!this.state.showLogin) {
            return (
                <Login newJWT={this.props.newJWT} authSwitch={this.authSwitch}/>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.whichForm()}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};