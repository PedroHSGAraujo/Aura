import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Header from '@/components/Header';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ backgroundColor: 'transparent', height: 190, width: '65%', display: 'flex', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#C4C4C4', height: 100, width: 100, borderRadius: 50, marginTop: 5 }}></View>
        <Text style={{ color: 'black', fontSize: 22, fontWeight: 700, marginTop: 15 }}> Nome Sobrenome</Text>
        <Text style={{ color: '#999', fontSize: 18, fontWeight: 400 }}> 61 9 9999-9999</Text>
      </View>
      <View style={{ backgroundColor: 'transparent', height: 100, width: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ backgroundColor: 'transparent', height: 100, width: 80, display: 'flex', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', height: 60, width: 60, borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome6 name="user-doctor" size={24} color="black" />
          </View>
          <Text style={{ color: 'black' }}>Médicos</Text>
          <Text style={{ color: 'black' }}>Salvos</Text>
        </View>
        <View style={{ backgroundColor: 'transparent', height: 100, width: 80, display: 'flex', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', height: 60, width: 60, borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome6 name="receipt" size={24} color="black" />
          </View>
          <Text style={{ color: 'black' }}>Artigos</Text>
          <Text style={{ color: 'black' }}>Salvos</Text>
        </View>
        <View style={{ backgroundColor: 'transparent', height: 100, width: 80, display: 'flex', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', height: 60, width: 60, borderRadius: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome6 name="heart" size={24} color="black" />
          </View>
          <Text style={{ color: 'black' }}>Diário de</Text>
          <Text style={{ color: 'black' }}>Saúde</Text>
        </View>
      </View>
      <View style={{ backgroundColor: 'red', width: '80%', height: 320, marginTop: 15, borderRadius: 20, overflow: 'hidden' }}>
        <View style={{ backgroundColor: 'white', width: '100%', height: 80, display: 'flex', flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', height: '100%', width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'transparent', height: 80, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text><FontAwesome6 name="calendar" size={24} color="#00A651" /></Text>
            </View>
            <Text style={{ color: '#999' }}>Compromissos</Text>
          </View>
          <View style={{ width: '20%', height: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="#999" />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', height: 80, display: 'flex', flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'ehite', height: '100%', width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'white', height: 80, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text><FontAwesome6 name="pills" size={24} color="#00A651" /></Text>
            </View>
            <Text style={{ color: '#999' }}>Lembrete de Remédio</Text>
          </View>
          <View style={{ width: '20%', height: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="#999" />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', height: 80, display: 'flex', flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', height: '100%', width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'transparent', height: 80, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text><FontAwesome6 name="user-doctor" size={24} color="#00A651" /></Text>
            </View>
            <Text style={{ color: '#999' }}>Meus Médicos</Text>
          </View>
          <View style={{ width: '20%', height: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="#999" />
          </View>
        </View>
        <View style={{ backgroundColor: 'white', width: '100%', height: 80, display: 'flex', flexDirection: 'row'  }}>
          <View style={{ backgroundColor: 'white', height: '100%', width: '80%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ backgroundColor: 'transparent', height: 80, width: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Text><FontAwesome6 name="dollar-sign" size={24} color="#00A651" /></Text>
            </View>
            <Text style={{ color: '#999' }}>Meus Médicos</Text>
          </View>
          <View style={{ width: '20%', height: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="#999" />
          </View>
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
    alignItems: 'center'
  },
  title: {
    backgroundColor: '#f8f8f8',
    width: '100%',
  },
  text: {
    color: '#000'
  }
});
