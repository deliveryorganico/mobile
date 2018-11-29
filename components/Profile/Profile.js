import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements'

export default class App extends React.Component {
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#ddd'}}>
                <Header
                    leftComponent={{icon: 'face', color: '#fff' } }
                    centerComponent={{ text: 'PROFILE', style: { color: '#fff' } }}
                    outerContainerStyles={{ backgroundColor: '#FFC107' }}
                />
 			</View>
		);
	}
}