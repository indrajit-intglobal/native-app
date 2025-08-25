import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SearchScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search coming soon.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#0A0F1E', padding:16 },
  text:{ color:'#E6EAF2' }
})
