import React, { Fragment, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import efetuarLogin from '../../api/login';
import estilo from './estilo';

const Login = () => {

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    const fazerLogin = () => {
        efetuarLogin(usuario,senha)
        
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

export default Login