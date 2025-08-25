import React from 'react'
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { addToCart } from '../slices/cartSlice'
import { theme } from '../theme'

export default function ProductDetailsScreen({ navigation }: any){
  const route = useRoute<any>()
  const id = route.params?.id
  const p = useSelector((s:RootState) => s.products.list.find(x => x.id === id))
  const dispatch = useDispatch()

  if(!p) return null

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Image source={{ uri: p.image }} style={styles.image} />
      <Text style={styles.title}>{p.title}</Text>
      <Text style={styles.meta}>${p.price.toFixed(2)}  •  ★ {p.rating.toFixed(1)}  •  {p.category}</Text>
      {p.badges && <View style={{ flexDirection:'row', gap:8, marginTop:8 }}>
        {p.badges.map(b => (<View key={b} style={styles.badge}><Text style={{ color:'#0A0F1E', fontWeight:'800' }}>{b}</Text></View>))}
      </View>}
      <Text style={styles.desc}>{p.description}</Text>

      <TouchableOpacity onPress={() => { dispatch(addToCart({ id: p.id, title: p.title, price: p.price, image: p.image, qty: 1 })); navigation.navigate('Cart') }} style={styles.cta}>
        <Text style={styles.ctaText}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:'#0A0F1E' },
  image:{ width: '100%', height: 260, borderRadius: 18 },
  title:{ color:'#E6EAF2', fontSize: 22, fontWeight: '900', marginTop: 12 },
  meta:{ color:'#94A3B8', marginTop: 4 },
  desc:{ color:'#E6EAF2', marginTop: 12, lineHeight: 22 },
  badge:{ backgroundColor:'#39FF88', paddingHorizontal:10, paddingVertical:6, borderRadius: 999 },
  cta:{ backgroundColor:'#39FF88', paddingVertical:16, borderRadius:14, alignItems:'center', marginTop: 16 },
  ctaText:{ color:'#0A0F1E', fontWeight:'900', fontSize:16 }
})
