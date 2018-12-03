import React from "react";
import {ImageBackground, StyleSheet, View} from "react-native";
import LoginForm from "./LoginForm";
import {Card} from "react-native-material-ui";


export default class loginView extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Card>
                            <View style={styles.formContainer}>
                                <LoginForm/>
                            </View>
                        </Card>
                    </View>
                </View>

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