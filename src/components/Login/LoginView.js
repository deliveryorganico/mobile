import React from "react";
import {ImageBackground, StyleSheet, View} from "react-native";
import LoginForm from "./LoginForm";
import {Card} from "react-native-material-ui";
import Nav from '../navbar/toolbar';


export default class loginView extends React.Component {
    render() {
        return (
            <ImageBackground
                style={styles.logo}
                source={require("../../../images/fruta.jpg")}
            >
                <Nav/>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Card>
                            <View style={styles.formContainer}>
                                <LoginForm/>
                            </View>
                        </Card>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 170,
        textAlign: "center",
        marginLeft: -10,
    },
    logo: {
        width: 680,
        height: 680
    },
    card: {
        backgroundColor: "#00BCD4",
    }
});