import React from 'react'
import {Text, View} from 'react-native'
import {Button, Card, Header, SearchBar,List} from 'react-native-elements'
import axios from 'axios';
import ProductList from '../ProductList'

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
                    centerCompo  nt={{text: 'HOME', style: {color: '#fff'}}}
                    outerContainerStyles={{backgroundColor: '#FFC107'}}
                    rightComponent={{
                        icon: 'add', color: '#fff', onPress: () => {
                            this.props.navigation.navigate('Product')
                        }
                    }}
                />
                <SearchBar
                    lightTheme
                    icon={{type: 'font-awesome', name: 'search'}}
                    placeholder='Type Here...'
                />
                <ProductList/>
            </React.Fragment>
        );
    }
}