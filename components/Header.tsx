import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> <FontAwesome5 name="plus" size={20} color='#00A651' /> Aura</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    width: '100%' ,
    height: 100 ,
    alignItems: 'center',
    alignSelf: 'auto',
    display: 'flex',
  },
  text: {
    color: '#000',
    paddingTop: 50,
    fontWeight: 400,
    fontSize: 20,
  },
});

export default Header