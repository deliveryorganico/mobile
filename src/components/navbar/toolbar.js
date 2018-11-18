import React from 'react';
import NavBar, {NavButton, NavButtonText, NavTitle} from 'react-native-nav'
import {Alert, StyleSheet, View} from 'react-native'

export default class toolbar extends React.Component {
    render() {
        return (
            <NavBar>

                <View style={styles.container}>
                    <NavTitle>
                        {"Delivery Organico"}
                    </NavTitle>
                    <View style={styles.prueba}>
                        <NavButton onPress={(this.onLogin.bind(this))}>
                            <NavButtonText>
                                {"Ayuda"}
                            </NavButtonText>
                        </NavButton>
                    </View>
                </View>

            </NavBar>


        )
    }

    onLogin() {
        Alert.alert(
            'Ayuda',
            'Proximamente',
            [
                {
                    text: 'Aceptar',

                },
                {
                    text: 'Cancelar',

                }
            ]
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