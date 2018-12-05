import React from "react";
import {Button, ImageBackground, StyleSheet, View} from "react-native";
import {Card} from 'react-native-elements'
import t from 'tcomb-form-native';


export default class Login extends React.Component {

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
        this.props.navigation.navigate('Home')
    }

    render() {
        const {handleSubmit} = this.props;

        const Form = t.form.Form;

        const User = t.struct({
            username: t.String,
            password: t.String
        });

        return (
            <React.Fragment>
                <ImageBackground
                    style={styles.logo}
                    source={require("../../images/fruta.jpg")}
                >
                    <View style={styles.container}>
                        <Card>
                            <View>
                                <Form
                                    ref={c => this._form = c}
                                    type={User}/>
                                <Button
                                    title="Sign Up!"
                                    onPress={this.handleSubmit}
                                />
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
        marginLeft: -30
    },
    logo: {
        width: 680,
        height: 680
    }
});