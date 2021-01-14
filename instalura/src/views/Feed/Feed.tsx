import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, StatusBar } from 'react-native';
import adicionarComentario from '../../api/comentario';
import { curtirFoto, pegarImgLike } from '../../api/curtidas';
import lerFotos from '../../api/feed';
import { Cabecalho } from '../../components/Cabecalho';
import { Comentarios } from '../../components/Comentarios';
import { Foto } from '../../components/Foto';
import { FotosInfo } from '../../interfaces/FotosInfo';

const Feed = () => {
  
    const [fotos, setFotos] = useState([])
    useEffect(() => {
      lerFotos(setFotos);
    },[])
  
    let altura = 0
  
    return (
      <ScrollView style={{marginTop: altura}}>
        <StatusBar 
          backgroundColor="white"
          barStyle="dark-content"
        />
        <FlatList 
          data={fotos} 
          keyExtractor={(item: FotosInfo) => item.id.toString()}
          renderItem={
            ({item}) => 
            <Fragment>
              <Cabecalho nomeUsuario={item.userName} urlImage={item.userURL} />
              <Foto 
                urlFoto={item.url} 
                descricao={item.description} 
                quantidadeLikes={item.likes} 
                imgLike={pegarImgLike}
                curtirFoto={curtirFoto}  
              />
              <Comentarios 
                comentarios={item.comentarios}
                adicionarComentario={adicionarComentario}
              />
            </Fragment>
          }
        />
      </ScrollView>
  
    );
  }

  Feed.navigationOptions = ({navigation}: {navigation: any}) => {
    const opcoes = {
        title: navigation.getParam("nome"),
        headerShown: true
    }

    if (Platform.OS === "android") {
        opcoes.headerShown = false
    }

    return opcoes
}
  
  export default Feed;