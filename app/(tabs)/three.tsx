import { StyleSheet } from 'react-native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Header from '@/components/Header';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.pharma}>
        <View style={styles.icon}></View>
        <View style={styles.description}>
          <Text style={styles.ptext}>
            Drogasil
          </Text>
          <Text style={styles.dtext}>
            Essa informação está na bula do...
          </Text>
        </View>
        <View style={styles.get}>
          <Text style={styles.htext}>
            18:32
          </Text>
        </View>
      </View>
      <View style={styles.pharma}>
        <View style={styles.online}></View>
        <View style={styles.picon}></View>
        <View style={styles.description}>
          <Text style={styles.ptext}>
            Dra. Amanda
          </Text>
          <Text style={styles.dtext}>
            O retorno será em 15 dias
          </Text>
        </View>
        <View style={styles.get}>
          <Text style={styles.htext}>
            18:15
          </Text>
        </View>
      </View>
      <View style={styles.pharma}>
        <View style={styles.icon}></View>
        <View style={styles.description}>
          <Text style={styles.ptext}>
            Drogaria Rosário
          </Text>
          <Text style={styles.dtext}>
            Infelizmente só temos o genérico
          </Text>
        </View>
        <View style={styles.get}>
          <Text style={styles.htext}>
            17:57
          </Text>
        </View>
      </View>
      <View style={styles.pharma}>
        <View style={styles.picon}></View>
        <View style={styles.description}>
          <Text style={styles.ptext}>
            Dr. Rafael
          </Text>
          <Text style={styles.dtext}>
            Volte quando os exames estivere...
          </Text>
        </View>
        <View style={styles.get}>
          <Text style={styles.htext}>
            17:41
          </Text>
        </View>
      </View>
    </View>
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
  title: {
    backgroundColor: '#f8f8f8',
    width: '100%',
  },
  text: {
    color: '#000',
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
  ptext: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 5,
  },
  dtext: {
    color: '#ABAFB3',
    fontSize: 13,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  htext: {
    color: '#ABAFB3',
    fontSize: 13,
  },
  get: {
    backgroundColor: '#FFF',
    height: 30,
    width: 40,
    position: 'absolute',
    left: 294,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  picon: {
    backgroundColor: '#C4C4C4',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 10,
  },
  online: {
    backgroundColor: '#00A651',
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 3,
    marginLeft: 10,
    position: 'absolute',
    zIndex: 1,
    left: 42,
    top: 50,
  },
});