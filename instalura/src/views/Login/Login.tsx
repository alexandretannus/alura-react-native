import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Fragment, useState } from 'react';
import { Button, Platform, Text, TextInput, View } from 'react-native';
import efetuarLogin from '../../api/login';
import estilo from './estilo';

const Login = ({ navigation }: { navigation: any }) => {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [mensagemErro, setMensagemErro] = useState("")

    const fazerLogin = async () => {
        try {
            const token = await efetuarLogin(usuario,senha)
            if (token) {
                await AsyncStorage.setItem("instalura_token", token)
            }
            navigation.replace("Feed", { nome: usuario })
            
        } catch (error) {
            setMensagemErro(error.message)         
        }
        
    }

    return (
        <Fragment>
            <View style={estilo.container}>
                <TextInput
                    style={estilo.inputs}
                    placeholder="Usuário"
                    onChangeText={texto => setUsuario(texto)}
                />
                <TextInput
                    style={estilo.inputs}
                    placeholder="Senha"
                    onChangeText={texto => setSenha(texto)}
                    secureTextEntry={true}
                />
                <Text>{mensagemErro}</Text>
            </View>
            <View style={estilo.buttonView}>                
                <Button 
                    title="Entrar" 
                    onPress={fazerLogin}
                />
            </View>
        </Fragment>        
    )
}

Login.navigationOptions = () => {
    const opcoes = {
        title: "Log",
        headerShown: true
    }

    if (Platform.OS === "android") {
        opcoes.headerShown = false
    }

    return opcoes
}

export default Login