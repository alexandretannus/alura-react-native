import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, StatusBar } from 'react-native';
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
  
    let altura = Platform.OS === "ios" ? 35 : 5
  
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
              <Foto urlFoto={item.url} descricao={item.description} quantidadeLikes={item.likes} />
              <Comentarios comentarios={item.comentarios}/>
            </Fragment>
          }
        />
      </ScrollView>
  
    );
  }
  
  export default Feed;