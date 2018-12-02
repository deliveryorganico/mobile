import React from 'react'
import Axios from 'axios';
import { View,Text } from 'react-native';
import { Card, Button } from 'react-native-elements'

export default class ProductList extends React.Component{
    state={
        products:[]
    }

    componentDidMount(){
        Axios.get(`http://192.168.0.106:8000/rest/product`).then(res =>  {
            console.log(res);
            this.setState({ products: res.data })
        });
    }
    render() {
            return(<View>
                {this.state.products.map(product =>
                <Card
                title={product.title}
                image={{uri: product.photo}}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: "row",
                    padding: 10
                }}>
                    <Text style={{marginBottom: 10, fontSize:17}}>
                        {product.description}
                    </Text>
                    <View style={{marginLeft: 200}}>
                        <Text style={{marginBottom: 10, fontSize:17}}>
                            {product.price}
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
                )}
                </View>
            )
    }

}