import React from 'react';
import { Image, Text, View } from 'react-native';
import estilo from './estilo';

const Cabecalho = ({ nomeUsuario, urlImage }: {nomeUsuario: string, urlImage: string}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image 
                source={ {uri: urlImage } } 
                style={ estilo.imagem }
            />
            <Text>{nomeUsuario}</Text>
        </View>
    )
}

export default Cabecalho;