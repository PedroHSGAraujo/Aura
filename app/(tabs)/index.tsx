import { Image, ScrollView, StyleSheet, TextInput } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import Card from '@/components/Card';
import Header from '@/components/Header';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.containerscroll}>
      <View style={styles.container}>
        <Header />
        <View style={styles.search}>
          <Feather name="search" size={24} color="black" /> 
          <TextInput placeholder="Buscar" style={styles.stext}></TextInput>
        </View>
        <View style={styles.pharma}>
          <Image source={require('../../assets/images/Farmacia.png')} style={styles.icon}/>
          <View style={styles.description}>
            <Text style={styles.ptext}>
              Farmácia
            </Text>
            <Text style={styles.dtext}>
              Compre medicamentos autorizados
            </Text>
          </View>
          <View style={styles.get}>
            <Text style={styles.gtext}>
              Obter
            </Text>
          </View>
        </View>
        <View style={styles.consulte}>
          <Image source={require('../../assets/images/Consulta.png')} style={styles.icon}/>
          <View style={styles.description}>
            <Text style={styles.ptext}>
              Consulta Médica
            </Text>
            <Text style={styles.dtext}>
              Agende uma consulta
            </Text>
          </View>
          <View style={styles.get}>
            <Text style={styles.gtext}>
              Obter
            </Text>
          </View>
        </View>
        <View style={styles.consulte}>
          <Image source={require('../../assets/images/TesteLab.png')} style={styles.icon}/>
          <View style={styles.description}>
            <Text style={styles.ptext}>
              Teste de Laboratório
            </Text>
            <Text style={styles.dtext}>
              Agende um teste no laboratório
            </Text>
          </View>
          <View style={styles.get}>
            <Text style={styles.gtext}>
              Obter
            </Text>
          </View>
        </View>
        <View style={styles.doctxt}>
          <Text style={styles.pertotxt}>
            Doutores perto de você
          </Text>
          <Text style={styles.vertxt}>
            Ver todos
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  containerscroll: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: '100%',
  },
  search: {
    backgroundColor: '#fff',
    width: '90%',
    height: 54,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  pharma: {
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    marginTop: 20,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  consulte: {
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    marginTop: 15,
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stext: {
    color: '#000',
    fontSize: 23,
    width: '85%',
    paddingLeft: 10,
  },
  ptext: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: '#C4C4C4',
    height: 60,
    width: 60,
    borderRadius: 5,
    marginLeft: 10,
  },
  description: {
    backgroundColor: 'white',
  },
  dtext: {
    color: '#ABAFB3',
    fontSize: 12,
    paddingLeft: 10,
  },
  get: {
    backgroundColor: '#F8F8FB',
    height: 30,
    width: 50,
    position: 'absolute',
    left: 284,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  gtext: {
    color: '#00A651',
    fontWeight: "bold",
  },
  doctxt: {
    backgroundColor: '#f8f8f8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 40,
  },
  pertotxt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 600,
  },
  vertxt: {
    color: '#00A651',
    fontSize: 15,
    fontWeight: 600,
  },
  cards: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    height: 200,
  }
});