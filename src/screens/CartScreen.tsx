import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { removeFromCart, updateQty } from '../slices/cartSlice'

export default function CartScreen({ navigation }: any){
  const { items } = useSelector((s:RootState) => s.cart)
  const dispatch = useDispatch()

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      {items.map(i => (
        <View key={i.id} style={styles.row}>
          <Image source={{ uri: i.image }} style={styles.thumb} />
          <View style={{ flex:1 }}>
            <Text style={styles.title}>{i.title}</Text>
            <Text style={styles.meta}>${i.price.toFixed(2)}</Text>
            <View style={styles.qtyRow}>
              <TouchableOpacity onPress={() => dispatch(updateQty({ id: i.id, qty: i.qty - 1 }))} style={styles.qtyBtn}><Text style={styles.qtyText}>-</Text></TouchableOpacity>
              <Text style={styles.qtyNum}>{i.qty}</Text>
              <TouchableOpacity onPress={() => dispatch(updateQty({ id: i.id, qty: i.qty + 1 }))} style={styles.qtyBtn}><Text style={styles.qtyText}>+</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => dispatch(removeFromCart(i.id))} style={styles.remove}><Text style={{ color:'#FF5A5F' }}>Remove</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.total}>
        <Text style={{ color:'#94A3B8' }}>Subtotal</Text>
        <Text style={{ color:'#E6EAF2', fontWeight:'900' }}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity disabled={items.length===0} onPress={() => navigation.navigate('Checkout')} style={[styles.checkout, { opacity: items.length?1:0.5 }]}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0A0F1E' },
  row:{ flexDirection:'row', backgroundColor:'#12182A', padding:10, borderRadius:14, marginBottom:10, gap:10 },
  thumb:{ width:80, height:80, borderRadius:10 },
  title:{ color:'#E6EAF2', fontWeight:'700' },
  meta:{ color:'#94A3B8', marginTop:2 },
  qtyRow:{ flexDirection:'row', alignItems:'center', marginTop:8, gap:8 },
  qtyBtn:{ backgroundColor:'#0A0F1E', width:28, height:28, borderRadius:8, alignItems:'center', justifyContent:'center' },
  qtyText:{ color:'#E6EAF2', fontSize:18, fontWeight:'800' },
  qtyNum:{ color:'#E6EAF2', width:24, textAlign:'center' },
  remove:{ marginLeft: 'auto' },
  total:{ flexDirection:'row', justifyContent:'space-between', marginTop: 8 },
  checkout:{ backgroundColor:'#39FF88', paddingVertical:16, borderRadius:14, alignItems:'center', marginTop: 16 },
  checkoutText:{ color:'#0A0F1E', fontWeight:'900', fontSize:16 }
})
