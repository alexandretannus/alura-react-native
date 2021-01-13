import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, StatusBar } from 'react-native';
import lerFotos from './src/api/feed';
import { Cabecalho } from './src/components/Cabecalho';
import { Comentarios } from './src/components/Comentarios';
import { Foto } from './src/components/Foto';
import { Feed } from './src/views/Feed';

export default function App() {  
  return (
    <Feed />
  );
}
