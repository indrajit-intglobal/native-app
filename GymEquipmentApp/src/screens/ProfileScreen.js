import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.info}>Name: John Doe</Text>
      <Text style={styles.info}>Email: john@example.com</Text>
      <Button title="Logout" onPress={() => navigation.navigate('Login')} color="#FF4500" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  title: { fontSize: 20, color: '#FFF' },
  info: { color: '#CCC', marginVertical: 5 },
});

export default ProfileScreen;