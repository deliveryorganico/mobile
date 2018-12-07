import React from 'react'
import {Alert, Picker, View, Image} from 'react-native'
import {Button, FormInput, FormLabel,} from 'react-native-elements'
import axios from 'axios'
import Axios from "axios/index";
import ImagePicker from "react-native-image-picker";
const options = {
    title: 'mis fotos',
    takePhotoButtonTitle: 'Camara',
    chooseFromLibraryButtonTitle: 'Galeria',

};

export default class Addproduct extends React.Component {

    state = {
        title: '',
        description: '',
        price: null,
        branch: null,
        branches: []
    };
        
    post = () => {

        if (this.state.title == '') {
            Alert.alert(
                'Error!',
                'Ingrese el titulo del producto')
        }
        else if (this.state.description == '') {
            Alert.alert(
                'Error!',
                'Ingrese una descripcion')
        } else if (this.state.price == null) {
            Alert.alert(
                'Error!',
                'Ingrece el precio del producto')
        } else if (this.state.price == 0) {
            Alert.alert(
                'Error!',
                'Ingrece un precio correcto')
        } else if (/^\,+/.test(this.state.price)) {
            Alert.alert(
                'Error!',
                'Ingrese un precio correcto')
        } else if (/,$/.test(this.state.price)) {
            Alert.alert(
                'Error!',
                'Ingrese un precio correcto')
        } else if (/,{2}/.test(this.state.price)) {
            Alert.alert(
                'Error!',
                'El precio no puede contener mas de una coma')
        }
        else if (this.state.branch == null) {
            Alert.alert(
                'Error!',
                'Seleccione una sucursal valida')
        } else if (this.state.branch == 0) {
            Alert.alert(
                'Error!',
                'Seleccione una sucursal valida')
        }

        else {
            var cambiar = this.state.price;
            cambiar = cambiar.replace(',', '.');
            this.state.price = cambiar;
            axios({
                method: 'post',
                url: 'http://192.168.0.104:8000/rest/product/',
                data: {
                    title: this.state.title,
                    description: this.state.description,
                    price: this.state.price,
                    branch: this.state.branch,
                }
            });
            Alert.alert(
                'Felicitaciones!',
                'Posteo exitoso',
                [
                    {
                        text: 'Aceptar', onPress: () => {
                            this.props.navigation.navigate('Home')
                        }, style: 'aceptar'
                    },

                ]
            )
        }


    }
    ;

    componentDidMount() {
        Axios.get(`http://192.168.0.104:8000/rest/branch/`).then(res => {
            this.setState({branches: res.data})
        });
    }
    render() {


        return (
            <View style={{marginTop: 22}}>

                <View>
                    <FormLabel>Nombre del Producto</FormLabel>
                    <FormInput name="title" onChangeText={(title) => this.setState({title})}/>
                    <FormLabel>Descripcion</FormLabel>
                    <FormInput name="description" onChangeText={(description) => this.setState({description})}/>
                    <FormLabel>Precio</FormLabel>
                    <FormInput name="price" keyboardType="numeric" onChangeText={(price) => this.setState({price})}/>
                    <FormLabel>Sucursal</FormLabel>


                    <Picker
                        selectedValue={this.state.branch}
                        style={{height: 100, width: 380, marginTop: -35}}
                        onValueChange={(itemValue, itemIndex) => this.setState({branch: itemValue})}>
                        <Picker.Item label='------' value='0'/>
                        {this.state.branches.map(branch =>

                            <Picker.Item key={branch.id} label={branch.name} value={branch.id}/>
                        )}

                    </Picker>

                </View>

                <Button
                    small
                    rounded
                    style={{marginTop: 230}}
                    icon={{name: 'check'}}
                    title='Publicar'
                    backgroundColor='green'
                    onPress={this.post
                    }
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


