import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Appbar } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Home ({navigation}) {
  return  (
    <ScrollView style={styles.scrollView}>
      <Appbar.Content style={styles.titulo} textAlign='center' title="Amigos de Joinville" color="white" />
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Cachorros')}>
            Cachorros
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Gatos')}>
            Gatos
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Passaros')}>
            Passaros
          </Button>
        </Card.Content>
      </Card>
      {/* <Card>
    <Card.Cover source={{ uri: 'https://img.freepik.com/vetores-premium/logotipo-de-amor-de-animal-de-estimacao-coracao-e-simbolo-de-gato-em-design-plano-de-cor-rosa_8586-1132.jpg' }} />
    </Card> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  titulo: {
    backgroundColor: '#FA497A',
    fontWeight: 'bold',
    fontSize: 'titleLarge',
    textAlign: 'center',
    padding: 15,
    color: 'white', 
    marginBottom: 160,
  },
  button:{
    backgroundColor: '#FA497A',
  },
  content: {
    padding: 150,
  },
  Appbar: {
    textAlign: 'center',
  }
});

export default Home