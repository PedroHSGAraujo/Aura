import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
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
            Dipirona
          </Text>
          <Text style={styles.dtext}>
            R$ 10,00
          </Text>
        </View>
        <View style={styles.get}>
          <Text>
            <FontAwesome5 name="trash-alt" size={16} color="red" />
          </Text>
        </View>
      </View>
      <View style={styles.pharma}>
        <View style={styles.icon}></View>
        <View style={styles.description}>
          <Text style={styles.ptext}>
            Dorflex
          </Text>
          <Text style={styles.dtext}>
            R$ 20,00
          </Text>
        </View>
        <View style={styles.get}>
          <Text>
            <FontAwesome5 name="trash-alt" size={16} color="red" />
          </Text>
        </View>
      </View>
      <View style={styles.total}>
        <View style={styles.totaltext}>
          <Text style={styles.ttext}>
            Total:
          </Text>
          <Text style={styles.ttext}>
            R$ 30,00
          </Text>
        </View>
        <View style={styles.pagamento}>
          <Text style={styles.ftext}>
            Finalizar Compra
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
    color: '#000'
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
  totaltext: {
    backgroundColor: '#fff',
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    backgroundColor: '#fff',
    width: '90%',
    height: 140,
    top: 590,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  pagamento: {
    width: '90%',
    height: 60,
    backgroundColor: '#00A651',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  ttext: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ftext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dtext: {
    color: '#ABAFB3',
    fontSize: 12,
    paddingLeft: 10,
  },
  get: {
    backgroundColor: '#F8F8FB',
    height: 30,
    width: 40,
    position: 'absolute',
    left: 294,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
