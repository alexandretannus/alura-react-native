import React, { Fragment, useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View, _View } from 'react-native'
import { ComentarioInfo } from '../../interfaces/ComentarioInfo'
import estilo from './estilo'

const Comentarios = ({comentarios, adicionarComentario}: {comentarios: ComentarioInfo[], adicionarComentario: any}) => {

    const [estadoComentarios, setComentarios] = useState(comentarios)

    const comentar = () => {
        campoInput?.clear()
        const novoComentario = adicionarComentario(
            conteudoCampoInput,
            "Alexandre"
        )
        setComentarios([...estadoComentarios, novoComentario])
    }

    let campoInput: TextInput | null;
    let conteudoCampoInput = "";

    return (
        <Fragment>
            <FlatList 
                data={estadoComentarios} 
                keyExtractor={(item: ComentarioInfo, index) => index.toString()}
                renderItem={
                    ({item}) => 
                        <View>                            
                            <Text>{ item.userName } { item.text }</Text>
                        </View>
                }
            />

            <View style={estilo.viewTextInput}>
                <TextInput 
                    style={estilo.textInput} 
                    placeholder="Deixe seu comentário"
                    onChangeText={texto => conteudoCampoInput = texto}
                    ref={textInput => campoInput = textInput}
                />
                <TouchableOpacity onPress={comentar}>
                    <Image style={estilo.imagem} source={require("../../../resources/img/send.png")} />
                </TouchableOpacity>
            </View>
            
        </Fragment>
    )
}

export default Comentarios