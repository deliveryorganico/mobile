import React from "react";
import {StyleSheet,ImageBackground, Text, TextInput, View} from "react-native";
import {Card} from 'react-native-elements'
import {Button} from 'react-native-material-ui';

export default class Login extends React.Component {
    render() {

        return (
            <React.Fragment>
                <ImageBackground
                    style={styles.logo}
                    source={require("../../images/fruta.jpg")}
                >
                    <View style={styles.container}>
                            <Card>
                                <View>
                                    <Text style={styles.texto}>Ingrese su nombre de usuario</Text>
                                    <TextInput
                                        placeholder='Nombre de Usuario'
                                        style={styles.input}
                                    />
                                    <Text style={styles.texto2}>Ingrese su contraseña</Text>
                                    <TextInput
                                        placeholder='Contraseña'
                                        style={styles.input}
                                    />
                                    <View style={styles.btn}>
                                        <Button onPress={() => this.props.navigation.navigate('Home')} raised primary
                                                text="Login"/>
                                        <View style={styles.btn2}>
                                            <Button onPress={() => this.props.navigation.navigate('Home')} raised
                                                    primary
                                                    text="Registrarse"/>
                                        </View>
                                    </View>
                                </View>
                            </Card>

                    </View>
                </ImageBackground>

            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        backgroundColor: '#9E9E9E',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10
    },
    texto: {
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 68,
        fontSize: 20,
        color: 'black'
    },
    texto2: {
        marginBottom: 5,
        marginLeft: 90,
        fontSize: 20
    },
    btn: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 10
    },
    btn2: {
        marginLeft: 10
    },
    container: {
        marginTop: 170,
        textAlign: "center",
        marginLeft: -33,
    },
    logo: {
        width: 680,
        height: 680
    }
});