import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { ProductCard } from '../components/UI'

export default function ShopScreen(){
  const nav = useNavigation<any>()
  const products = useSelector((s:RootState) => s.products.list)
  const [q, setQ] = useState('')

  const filtered = products.filter(p => p.title.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()))

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <TextInput placeholder='Search equipment, e.g. dumbbell' placeholderTextColor={'#8891A7'} value={q} onChangeText={setQ} style={styles.input} />
      <View style={styles.grid}>
        {filtered.map((p:any) => (
          <View key={p.id} style={{ width: '48%', marginBottom: 12 }}>
            <ProductCard
              title={p.title}
              price={p.price}
              rating={p.rating}
              image={p.image}
              onPress={() => nav.navigate('ProductDetails', { id: p.id })}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor: '#0A0F1E' },
  grid:{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 12 },
  input:{ width:'100%', backgroundColor:'#12182A', color:'#E6EAF2', padding:14, borderRadius:14, marginBottom: 8 }
})
