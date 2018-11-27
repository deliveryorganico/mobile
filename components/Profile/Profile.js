import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-material-ui';

export default class App extends React.Component {
	render() {
		return(
			<View>
        <Avatar text="A" />

        <Avatar icon="grade" />
        <Avatar icon="person" iconColor="blue" />
        <Avatar icon="history" iconSize={20} />
        <Avatar icon="mic" size={75} />
    	</View>
		);
	}
}