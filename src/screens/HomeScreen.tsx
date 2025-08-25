import React from 'react'
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { H1, H2, P, ProductCard } from '../components/UI'
import { theme } from '../theme'

export default function HomeScreen(){
  const nav = useNavigation<any>()
  const products = useSelector((s:RootState) => s.products.list).slice(0,4)

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <View style={styles.hero}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop' }} style={styles.heroImg} />
        <View style={styles.heroOverlay} />
        <Text style={styles.heroTitle}>Build Your Dream Gym</Text>
        <TouchableOpacity onPress={() => nav.navigate('Shop')} style={styles.heroBtn}>
          <Text style={{ fontWeight: '800' }}>Shop Now</Text>
        </TouchableOpacity>
      </View>

      <H1>Featured</H1>
      <P>Top picks from pros and coaches</P>

      <View style={styles.grid}>
        {products.map((p:any) => (
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
  hero:{ borderRadius: 22, overflow: 'hidden', marginBottom: 16 },
  heroImg:{ width: '100%', height: 200 },
  heroOverlay:{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.25)' },
  heroTitle:{ position: 'absolute', left: 16, bottom: 52, color: '#fff', fontSize: 24, fontWeight: '900' },
  heroBtn:{ position: 'absolute', left: 16, bottom: 12, backgroundColor: '#39FF88', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 12 },
  grid:{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 12 }
})
