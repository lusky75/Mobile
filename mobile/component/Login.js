import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Toast from 'react-native-root-toast';

class Login extends React.Component {
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            login: '',
            password: ''
        }
    }

    onChangeLogin = (login) => {
        this.setState({login})
    }

    onChangePassword = (password) => {
        this.setState({password})
    }

    connection() {
        Toast.show("Bonjour, " + this.state.login + " !", 
                            {position: Toast.positions.CENTER});
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Page de connexion</Text>
                <TextInput value={this.state.login}
                            style={styles.textinput}
                            placeholder="Pseudo"
                            onChangeText={this.onChangeLogin} />
                <TextInput value={this.state.password}
                            style={styles.textinput}
                            secureTextEntry={true}
                            placeholder="Mot de passe"
                            onChangeText={this.onChangePassword} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Page')}>
                    <Text style={styles.textbutton}>Connexion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.registerbutton}>Tu n'es pas inscris? S'inscrire</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize : 40,
        color: '#000',
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: '#2b7ce5',
        borderBottomWidth: 1.5,
    },
    textinput: {
        textAlign: 'center',
        alignSelf: 'stretch',
        height: 40,
        fontSize: 20,
        marginTop: 40,
        marginLeft: 65,
        marginRight: 72,
        marginBottom: 20,
        color: '#000',
        borderRadius: 15,
        borderTopColor: '#2b7ce5',
        borderRightColor: '#2b7ce5',
        borderLeftColor: '#2b7ce5',
        borderBottomColor: '#2b7ce5',
        borderTopWidth: 1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderBottomWidth: 1,
    },
    textbutton:{
        alignItems: "center",
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#2b7ce5',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        height: 35,
        width: 200
    },
    registerbutton:{
        textDecorationLine: 'underline',
        marginTop: 10,
        fontSize: 15,
        color: '#2b7ce5',
        marginLeft: 0,
    }
})
/*
    render() {
        return (
            <View style={styles.View}>
                <Text style={styles.Login}> Page de connexion </Text>
                <TextInput style={styles.TextInput}
                    placeholder="Votre login"
                    onChangeText={this.onChangeLogin}
                    value={this.state.login}
                />

                <TextInput style={styles.TextInput}
                    placeholder="Votre mot de passe"
                    onChangeText={this.onChangePassword}
                    value={this.state.password}
                />

                <Button title="Connexion"
                    //onPress = {() => this.connection()}
                    onPress = {() => this.props.navigation.navigate('Page')}
                />
                <Button title="S'enregistrer"
                    onPress = {() => this.props.navigation.navigate('Register')}
                />
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    Login: {
        fontSize: 25,
        marginBottom: "5%"
    },
    View: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextInput: {
        width: "80%",
        height: "5%",
        backgroundColor: 'white',
        color: 'grey',
        marginBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: "rgb(3,155, 229)"
    }
})
*/
