import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../../slices/authSlice'
import { theme } from '../../theme'

export default function LoginScreen({ navigation }: any){
  const [email, setEmail] = useState('demo@gymshop.com')
  const [password, setPassword] = useState('password')
  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch(login({ email, password }))
    navigation.replace('Main')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>GYMSHOP</Text>
      <TextInput placeholder='Email' placeholderTextColor={'#8891A7'} value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder='Password' placeholderTextColor={'#8891A7'} secureTextEntry value={password} onChangeText={setPassword} style={styles.input} />
      <TouchableOpacity onPress={onLogin} style={styles.cta}><Text style={styles.ctaText}>Login</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color: theme.muted, marginTop: 16 }}>No account? <Text style={{ color: theme.primary }}>Register</Text></Text></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0A0F1E', alignItems:'center', justifyContent:'center', padding:24 },
  brand:{ color: '#39FF88', fontSize: 36, fontWeight: '900', letterSpacing: 4, marginBottom: 24 },
  input:{ width:'100%', backgroundColor:'#12182A', color:'#E6EAF2', padding:16, borderRadius:14, marginVertical:8 },
  cta:{ backgroundColor:'#39FF88', paddingVertical:16, borderRadius:14, width:'100%', alignItems:'center', marginTop:8 },
  ctaText:{ color:'#0A0F1E', fontWeight:'900', fontSize:16 }
})
