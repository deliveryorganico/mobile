import React from 'react';
import {AsyncStorage, View} from 'react-native';
import {Button, Header, ListItem} from 'react-native-elements';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: '',
            phone_tmp: null,
            address_tmp: null,
            st_number_tmp: null,
            city_tmp: null,
            locality_tmp: null,
            floor_tmp: null,
            zip_code_tmp: null,
            icons: {
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

        AsyncStorage.getItem('phone', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    phone = result;
                }
            }
        })
            .then((value) => this.setState({
                phone: phone_tmp
            }));

        AsyncStorage.getItem('address', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    address = result;
                }
            }
        })
            .then((value) => this.setState({
                address: address_tmp
            }));

        AsyncStorage.getItem('st_number', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    st_number = result;
                }
            }
        })
            .then((value) => this.setState({
                st_number: st_number_tmp
            }));

        AsyncStorage.getItem('city', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    city = result;
                }
            }
        })
            .then((value) => this.setState({
                city: city_tmp
            }));
        AsyncStorage.getItem('locality', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    locality = result;
                }
            }
        })
            .then((value) => this.setState({
                locality: locality_tmp
            }));
        AsyncStorage.getItem('floor', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    floor = result;
                }
            }
        })
            .then((value) => this.setState({
                floor: floor_tmp
            }));
        AsyncStorage.getItem('zip_code', function (errs, result) {
            if (!errs) {
                if (result !== null) {
                    zip_code = result;
                }
            }
        })
            .then((value) => this.setState({
                zip_code: zip_code_tmp
            }));

    }


    render() {
        const {loading, phone, address, st_number, city, locality, floor, zip_code} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    centerComponent={{text: 'Direccion', style: {color: '#fff'}}}
                    //                    rightComponent={{icon: 'more-vert', color:'#fff'}}
                    outerContainerStyles={{backgroundColor: '#FFC107'}}
                />
                <ListItem
                    key='2'
                    leftIcon={{name: this.state.icons.phone}}
                    title={phone}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.address}}
                    title={address}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.st_number}}
                    title={st_number}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.city}}
                    title={city}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.locality}}
                    title={locality}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.zip_code}}
                    title={zip_code}
                />
                <ListItem
                    leftIcon={{name: this.state.icons.floor}}
                    title={floor}
                />
                <Button
                    icon={{name: 'chevron-left'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Volver'
                    style={{marginTop: 25}}
                    onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}/>
            </View>

        );
    }
}