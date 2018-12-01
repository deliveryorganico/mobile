import React from 'react'
import { Text, } from 'react-native'
import { Header, Card, Button, SearchBar} from 'react-native-elements'

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
            centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
            outerContainerStyles={{ backgroundColor: '#FFC107' }}
            rightComponent={{ icon: 'add', color: '#fff', onPress: () => {this.props.navigation.navigate('Product')} }}
            />
            <SearchBar
            lightTheme
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...' 
            />
            <Card
            title='Banana'
            image={require('../../images/banana.jpg')}>
            <Text style={{marginBottom: 10}}>
                Probando
            </Text>
            <Button
            icon={{name: 'shopping-cart'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            onPress={() => this.props.navigation.navigate('Login')}
            title='COMPRAR' />
            </Card>

            </React.Fragment>
            );
        }
    }