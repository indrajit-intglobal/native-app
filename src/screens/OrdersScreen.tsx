import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function OrdersScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have no orders yet. Start lifting! 💪</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#0A0F1E', padding:16 },
  text:{ color:'#E6EAF2', textAlign:'center' }
})
