import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import { ListItem } from 'react-native-elements'

const questions = [
    {
      title: 'User',
      icon: 'person'
    },
    {
      title: 'Manage payment methods',
      icon: 'payment'
    },
    {
        title: 'Manage address',
        icon: 'place'
    },
    {
        title: 'Contact Us',
        icon: 'inbox'
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
                    rightComponent={{icon: 'more-vert', color:'#fff'}}
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
//<ListItem 
//                    title='User'
//                    leftIcon={{name:'person'}}/>
//                <ListItem
//                    title= 'Manage payment methods'
//                    leftIcon={{name:'payment'}} />
//                <ListItem
//                    title='Manage address'
//                    leftIcon={{name:'place'}}/>
//                <ListItem
//                title= 'Contact Us'
//                leftIcon={{name:'inbox'}} />