import React, { useState } from 'react';
import { StyleSheet, ScrollView, View  } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import CardCachorro from './src/Components/CardCachorro';

const animais = [
  {
    id: 1,
    capa: 'https://adotar.com.br/painel/upload/2022-07/animais_imagem871832.jpg', 
    nome: 'Totó', 
    raca: 'Viralata',
  },
  {
    id: 2,
    capa: 'https://f.i.uol.com.br/fotografia/2013/05/28/281341-600x600-1.jpeg', 
    nome: 'Bob', 
    raca: 'Viralata',
  },
  {
    id: 3,
    capa: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/gato-desaparecido-3-1.jpg', 
    nome: 'Biscoito', 
    raca: 'Viralata',
  },
  {
    id: 4,
    capa: 'https://img.freepik.com/fotos-premium/pobre-gato-em-um-abrigo-privado-da-cidade-de-odessa-gatos-perdidos-e-abandonados-devido-a-guerra-na-ucrania_713948-439.jpg?w=2000', 
    nome: 'Mel', 
    raca: 'Viralata',
  },
  {
    id: 5,
    capa: 'https://i0.statig.com.br/bancodeimagens/c8/j5/6q/c8j56qaz2yrps8wgrm7bzyyfp.jpg', 
    nome: 'Lili', 
    raca: 'Viralata',
  },
]

const ListaAnimais = () => {
const [animaisList, setAnimaisList] = useState(animais);

const handleRemove = (index) => {
  const newAnimaisList = [...animaisList];
  newAnimaisList.splice(index, 1);
  setAnimaisList(newAnimaisList);
};

return (
  <ScrollView style={styles.scroll}>
  <View style={styles.conteudo}>
    {animaisList.map((animal, index) => (
      <CardCachorro key={index} animal={animal} onRemove={() => handleRemove(index)} />
    ))}
  </View>
</ScrollView>
);
};
export default function Cachorros () {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Cachorros disponíveis para adoção" />
      </Card>
    <ListaAnimais/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%',
    backgroundColor: 'pink'
  }
});
