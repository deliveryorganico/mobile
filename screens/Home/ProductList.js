import React from 'react'
import Axios from 'axios';
import {ScrollView, Text, View} from 'react-native';
import {Button, Card, Icon,Badge, SearchBar} from 'react-native-elements'

export default class ProductList extends React.Component {
    state = {
        products: [],
        filter: ''
    }

    componentDidMount() {
        Axios.get(`http://192.168.43.244:8000/rest/product/`).then(res => {
            this.setState({products: res.data})
        });
    }
    handle_search(e) {
        console.log(e)
        const value = e;
        this.setState({ filter: value });
    };
    render() {

        return (
    <View>
        <View>
            <SearchBar
            lightTheme
            onChangeText={ text => { this.handle_search(text) }}
            icon={{ type: 'font-awesome', name: 'search'}}
            placeholder='Type Here...'
            autoCorrect = {false}
            />
        </View>
        <ScrollView>
                {this.state.products.filter(({ title }) => title.match(new RegExp(this.state.filter))).map(product =>
                    <Card key={product.id}
                          title={product.title}
                          image={{uri: product.photo}}
                          >
                        <View style={{
                            alignItems: 'center',
                            flexDirection: "row",
                            padding: 10
                        }}>
                            <Text style={{marginBottom: 10, fontSize: 17}}>
                                {product.description}
                            </Text>
                            <View style={{marginLeft: 200}}>
                                <Badge
                                    value={'$'+product.price}
                                    textStyle={{ color: 'orange' }}
                                />
                            </View>
                        </View>

                        <Button
                            icon={{name: 'shopping-cart'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='COMPRAR'/>
                    </Card>
                )}
            </ScrollView>
        </View>
        )
    }

}