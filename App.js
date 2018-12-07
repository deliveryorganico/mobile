import React from 'react';
import {Loading} from './screens/Login/common/Loading';
import Auth from './screens/Login/Auth';
import LoggedIn from './screens/Login/LoggedIn';
import deviceStorage from './services/deviceStorage';
import Home from './screens/Home/Home'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            jwt: '',
            loading: false,
        }
        this.newJWT = this.newJWT.bind(this);
        this.deleteJWT = deviceStorage.deleteJWT.bind(this);
        this.loadJWT = deviceStorage.loadJWT.bind(this);
        this.loadJWT();
    }

    newJWT(jwt) {
        this.setState({
            jwt: jwt
        });
    }

    whichForm() {
        if (!this.state.showLogin) {
            return (
                <Login newJWT={this.props.newJWT} authSwitch={this.authSwitch}/>
            );
        }
    };

    render() {
        if (this.state.loading) {
            return (
                <Loading size={'large'}/>
            );
        } else if (!this.state.jwt) {
            return (
                <Auth newJWT={this.newJWT}/>
            );
        } else if (this.state.jwt) {
            return (
                <LoggedIn deleteJWT={this.deleteJWT}/>

            );
        }
    }
}