import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../slices/cartSlice'
import { RootState } from '../store'

export default function CheckoutScreen({ navigation }: any){
  const [name, setName] = useState('Gym Lover')
  const [address, setAddress] = useState('221B Baker Street')
  const [city, setCity] = useState('Kolkata')
  const [zip, setZip] = useState('700001')
  const [card, setCard] = useState('4242 4242 4242 4242')
  const total = useSelector((s:RootState) => s.cart.items.reduce((sum,i)=> sum+i.price*i.qty, 0))
  const dispatch = useDispatch()

  const placeOrder = () => {
    dispatch(clearCart())
    Alert.alert('Order placed', 'Thank you for shopping with us!')
    navigation.replace('Orders')
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Delivery</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Full name' placeholderTextColor={'#8891A7'} />
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder='Address' placeholderTextColor={'#8891A7'} />
      <View style={{ flexDirection:'row', gap:10 }}>
        <TextInput style={[styles.input,{ flex:1 }]} value={city} onChangeText={setCity} placeholder='City' placeholderTextColor={'#8891A7'} />
        <TextInput style={[styles.input,{ width:120 }]} value={zip} onChangeText={setZip} placeholder='ZIP' placeholderTextColor={'#8891A7'} />
      </View>

      <Text style={styles.title}>Payment</Text>
      <TextInput style={styles.input} value={card} onChangeText={setCard} placeholder='Card number' placeholderTextColor={'#8891A7'} />

      <View style={styles.total}>
        <Text style={{ color:'#94A3B8' }}>Total</Text>
        <Text style={{ color:'#E6EAF2', fontWeight:'900' }}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity onPress={placeOrder} style={styles.cta}><Text style={styles.ctaText}>Place Order</Text></TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0A0F1E' },
  title:{ color:'#E6EAF2', fontSize:18, fontWeight:'800', marginTop: 10, marginBottom:6 },
  input:{ backgroundColor:'#12182A', color:'#E6EAF2', padding:14, borderRadius:14, marginVertical:6 },
  total:{ flexDirection:'row', justifyContent:'space-between', marginTop: 12 },
  cta:{ backgroundColor:'#39FF88', paddingVertical:16, borderRadius:14, alignItems:'center', marginTop: 16 },
  ctaText:{ color:'#0A0F1E', fontWeight:'900', fontSize:16 }
})
