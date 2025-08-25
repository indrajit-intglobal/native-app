import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { logout } from '../slices/authSlice'

export default function ProfileScreen({ navigation }: any){
  const user = useSelector((s:RootState) => s.auth.user)
  const dispatch = useDispatch()

  if(!user){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Please login to view your profile.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={styles.btn}><Text style={styles.btnText}>Go to Login</Text></TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, {user.name.split(' ')[0]} 👋</Text>
      <Text style={styles.text}>{user.email}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Orders')} style={styles.btn}><Text style={styles.btnText}>My Orders</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(logout())} style={[styles.btn,{ backgroundColor:'#FF5A5F' }]}><Text style={[styles.btnText,{ color:'#fff' }]}>Logout</Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#0A0F1E', padding:16 },
  title:{ color:'#E6EAF2', fontSize:20, fontWeight:'900', marginBottom:8 },
  text:{ color:'#94A3B8', marginBottom:8 },
  btn:{ backgroundColor:'#39FF88', paddingVertical:14, paddingHorizontal:18, borderRadius:14, marginTop:8 },
  btnText:{ color:'#0A0F1E', fontWeight:'900' }
})
