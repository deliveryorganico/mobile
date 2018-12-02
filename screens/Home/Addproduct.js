import React from 'react'
import {View} from 'react-native'
import {Button, FormInput, FormLabel,} from 'react-native-elements'
import axios from 'axios'

export default class Addproduct extends React.Component {
    render() {
        return (
            <View style={{marginTop: 22}}>
                <View>
                    <FormLabel>Nombre del Producto</FormLabel>
                    <FormInput/>
                    <FormLabel>Descripcion</FormLabel>
                    <FormInput/>
                    <FormLabel>Precio</FormLabel>
                    <FormInput/>
                </View>
                <Button
                    small
                    rounded
                    style={{marginTop: 20}}
                    icon={{name: 'check'}}
                    title='Publicar'
                    backgroundColor='green'
                />
                <Button
                    small
                    rounded
                    style={{marginTop: 10}}
                    icon={{name: 'close'}}
                    title='Cancelar'
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                    backgroundColor="red"
                />
            </View>
        )
    }
}
