import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { theme } from '../theme'

export const H1 = ({children}:{children:React.ReactNode}) => (
  <Text style={styles.h1}>{children}</Text>
)

export const H2 = ({children}:{children:React.ReactNode}) => (
  <Text style={styles.h2}>{children}</Text>
)

export const P = ({children, style}:{children:React.ReactNode, style?:any}) => (
  <Text style={[styles.p, style]}>{children}</Text>
)

export const PrimaryButton = ({title, onPress}:{title:string; onPress:()=>void}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
)

export const ProductCard = ({title, price, image, rating, onPress}:{title:string; price:number; image:string; rating:number; onPress:()=>void}) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={{ padding: 12 }}>
      <Text numberOfLines={1} style={styles.cardTitle}>{title}</Text>
      <P style={{ marginTop: 2 }}>${price.toFixed(2)} • ★ {rating.toFixed(1)}</P>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  h1:{ color: theme.text, fontSize: 28, fontWeight: '800' },
  h2:{ color: theme.text, fontSize: 20, fontWeight: '700' },
  p:{ color: theme.muted, fontSize: 14 },
  button:{ backgroundColor: theme.primary, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  buttonText:{ color: '#0A0F1E', fontWeight: '800', fontSize: 16, letterSpacing: 0.5 },
  card:{ backgroundColor: theme.card, borderRadius: 18, overflow: 'hidden' },
  image:{ width: '100%', height: 140 },
  cardTitle:{ color: theme.text, fontWeight: '700', fontSize: 16 }
})
