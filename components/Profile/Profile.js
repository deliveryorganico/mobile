import React from 'react';
import { Text, View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class App extends React.Component {
	render() {
		return(
			<View>
        <Toolbar
        leftElement="menu"
        centerElement="Profile"
        rightElement={{
            menu: {
                icon: "more-vert",
                labels: ["item 1", "item 2"]
            }
        }}
        onRightElementPress={ (label) => { console.log(label) }}
      />
 			</View>
		);
	}
}