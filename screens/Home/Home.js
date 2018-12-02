import React from 'react'
import {Text, View} from 'react-native'
import {Button, Card, Header, SearchBar} from 'react-native-elements'
import axios from 'axios';

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

    state = {
        products: []
    }

    async componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(`http://192.168.0.172:8000/rest/product/1/`)
            .then(res => {
                this.setState({products: res.data});
            })
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
                <Card
                    title={this.state.products.title}
                    image={{uri: this.state.products.photo}}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: "row",
                        padding: 10
                    }}>
                        <Text style={{marginBottom: 10, fontSize:17}}>
                            {this.state.products.description}
                        </Text>
                        <View style={{marginLeft: 200}}>
                            <Text style={{marginBottom: 10, fontSize:17}}>
                                {this.state.products.price}
                            </Text>
                        </View>
                    </View>
                    <Button
                        icon={{name: 'shopping-cart'}}
                        backgroundColor='#03A9F4'
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress={() => this.props.navigation.navigate('Login')}
                        title='COMPRAR'/>
                </Card>

            </React.Fragment>
        );
    }
}