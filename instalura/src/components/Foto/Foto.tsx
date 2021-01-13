import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { curtirFoto, pegarImgLike } from '../../api/curtidas';
import estilo from './estilo';


const Foto = ({urlFoto, descricao, quantidadeLikes}: {urlFoto: string, descricao: string, quantidadeLikes: number}) => {
    const [like, setLike] = useState(false)
    const [likes, setLikes] = useState(quantidadeLikes)
    const clicouCurtir = () => {
        const [novoEstadoCurtiu, curtidas] = curtirFoto(like, likes)
        setLikes(curtidas)
        setLike(novoEstadoCurtiu)
    }
    
    return (
        <View>            
            <Image style={estilo.imagem} source={ {uri: urlFoto} } />
            <Text>{ descricao }</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clicouCurtir}>
                    <Image source={pegarImgLike(like)} style={estilo.like} />
                </TouchableOpacity>
                <Text>{ likes }</Text>
            </View>
        </View>
    )
}


export default Foto;