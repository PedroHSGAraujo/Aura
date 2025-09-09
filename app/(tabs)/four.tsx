import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Header from '@/components/Header';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.title}>
        <Text style={styles.text}>
          Conta
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    width: '100%' ,
    height: '100%' ,
  },
  title: {
    backgroundColor: '#f8f8f8',
    width: '100%' ,
  },
  text: {
    color: '#000'
  }
});
