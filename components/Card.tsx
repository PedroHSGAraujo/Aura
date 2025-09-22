import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
        <View style={styles.circle}></View>
        <View style={styles.desc}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    width:130,
    marginTop: 40,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#C4C4C4',
    height: 60,
    width: 60,
    borderRadius: 30,
    zIndex: 1,
  },
  desc: {
    backgroundColor: 'white',
    width: '100%',
    height: 130,
    position: 'relative',
    top: -30,
    borderRadius: 20,
  }
});

export default Card