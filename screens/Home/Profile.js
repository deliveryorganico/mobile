import React from 'react';
import axios from 'axios';
import { Image, Text, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';

const questions = [
    {
      title: 'Federico Vargas',
      icon: 'person'
    },
    {
      title: 'fedevargas110@gmail.com',
      icon: 'email'
    },
    {
        title: 'Dirrecion',
        icon: 'place'
    },
    {
        title: 'Telefono',
        icon: 'call'
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: null,
                name: null,
                mail: null,
                phone: null,
                address: null,
                st_number: null,
                city: null,
                locality: null,
                floor: null,
                zip_code: null,
                photo: null
            },
            icons: {
                username: 'person',
                name: 'perm_identity',
                mail: 'email',
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
    }
    componentDidMount() {
        axios
            .get('http://192.168.0.4:8000/rest/profile/8/')
            .then(response => {
                console.log(response.data);
                this.setState({
                    user: {
                        username: response.data.username,
                        name: response.data.first_name + ' ' + response.data.last_name,
                        mail: response.data.mail,
                        phone: response.data.phone,
                        address: response.data.address,
                        st_number: response.data.st_number,
                        city: response.data.city,
                        locality: response.data.locality,
                        zip_code: response.data.zip_code,
                        floor: response.data.floor,
                        photo: response.data.photo
                    } 
                })           
            })
            .catch(error => {
                console.log(error);
            })
    }
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
//                    rightComponent={{icon: 'more-vert', color:'#fff'}}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
                <ListItem 
                    key="8"
                    leftIcon={{ name: this.state.icons.username }}
                    title={ this.state.user.username }/>
                
                {/* {questions.map( (questions, index) =>(
                    <ListItem 
                    key={index} 
                    leftIcon={{name: questions.icon}}
                    title={questions.title}/>
                ) )} */}
            </View>
		);
	}
}
