import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, StatusBar } from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/components/Cabecalho';
import { Comentarios } from './src/components/Comentarios';
import { Foto } from './src/components/Foto';

export interface FotosInfo {
  id: string,
  postDate: Date,
  url: string,
  description: string,
  allowComments: boolean,
  likes: number,
  comments: number,
  userId: number,
  userName: string,
  userURL: string,
  comentarios: ComentarioInfo[]
}

export interface ComentarioInfo {
  date: number,
  text: string,
  userName: string
}


export default function App() {
  
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
