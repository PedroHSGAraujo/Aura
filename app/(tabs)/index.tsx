import { StyleSheet } from 'react-native';

import Feather from '@expo/vector-icons/Feather';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Header from '@/components/Header';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.search}>
        <Text style={styles.stext}>
          <Feather name="search" size={24} color="black" />  Buscar
        </Text>
      </View>
      <View style={styles.pharma}>
        <View style={styles.icon}></View>
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
        <View style={styles.icon}></View>
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
        <View style={styles.icon}></View>
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
  search: {
    backgroundColor: '#fff',
    width: '90%',
    height: 54,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  pharma: {
    backgroundColor: '#fff',
    width: '90%',
    height: 80,
    marginTop: 30,
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
    color: '#ABAFB3',
    fontSize: 23,
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
  }
});