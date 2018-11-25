import React from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-material-ui';

export default class LoginForm extends React.Component {
    render() {
        return (
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
            <Button onPress={(this.onLogin.bind(this))} raised primary text="Login"/>
            <View style={styles.btn2}>
            <Button onPress={(this.onLogin.bind(this))} raised primary text="Registrarse"/>
            </View>
            </View>
            
            
            </View>
            )
        }
        
        onLogin() {
            Alert.alert(
                'Acceso',
                'Te has logueado',
                [
                    {
                        text: 'Aceptar',
                        onPress: (this.aceptar.bind(this))
                    },
                    {
                        text: 'Cancelar',
                        onPress: (this.cancelar.bind(this))
                    }
                ]
                )
            }
            
            aceptar() {
                console.log('sucess')
            }
            
            cancelar() {
                console.log('denied')
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
            }
        })
        