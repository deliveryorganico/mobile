import React from 'react'
import {StyleSheet,View} from "react-native";
import {Header, List, ListItem} from 'react-native-elements'
import {Button} from 'react-native-material-ui';


const list = [
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
    }
]
export default class ProfileScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header
                    centerComponent={{text: 'PROFILE', style: {color: '#fff'}}}
                    outerContainerStyles={{backgroundColor: '#FFC107'}}
                />
                <List>
                    {
                        list.map((item) => (
                            <ListItem
                                key={item.title}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                            />
                        ))
                    }
                </List>
                <View style={styles.btn}>
                <Button onPress={() => this.props.navigation.navigate('Login')} raised
                        primary
                        text="Logout"/>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    btn : {
        marginTop: 1,
        marginLeft: 260,
        alignItems: 'center',
        flexDirection: "row",
        padding: 10
    }
});
