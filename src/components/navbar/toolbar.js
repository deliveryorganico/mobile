import React from 'react';
import NavBar, {NavButtonText, NavTitle} from 'react-native-nav'
import {StyleSheet, View} from 'react-native'

export default class toolbar extends React.Component {
    render() {
        return (
            <NavBar>

                <View style={styles.container}>
                    <NavTitle>
                        {"Delivery Organico"}
                    </NavTitle>
                    <View style={styles.prueba}>
                        <NavButtonText>{"Ayuda"}</NavButtonText>
                    </View>
                </View>

            </NavBar>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    prueba: {
        marginLeft: 160
    }
});