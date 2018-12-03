import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import { ListItem } from 'react-native-elements'

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
    },
    {
        title: 'Add',
        icon: 'add'
    }
  ]

export default class App extends React.Component {
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    leftComponent={{icon: 'face', color: '#fff' } }
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
//                    rightComponent={{icon: 'more-vert', color:'#fff'}}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
                {questions.map( (questions, index) =>(
                    <ListItem 
                    key={index} 
                    leftIcon={{name: questions.icon}}
                    title={questions.title}/>
                ) )}
            </View>
		);
	}
}