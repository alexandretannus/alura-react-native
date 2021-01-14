import React, { Fragment } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import estilo from './estilo';

const Login = () => {
    return (
        <Fragment>
            <View style={estilo.container}>
                <TextInput
                    style={estilo.inputs}
                    placeholder="Usuário"
                />
                <TextInput
                    style={estilo.inputs}
                    placeholder="Senha"
                    secureTextEntry={true}
                />
            </View>
            <View style={estilo.buttonView}>                
                <Button 
                    title="Entrar" 
                />
            </View>
        </Fragment>        
    )
}

export default Login