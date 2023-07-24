import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View,Text, ScrollView , StyleSheet} from "react-native";


export default function PantallaPrincipal() {
    return (
        <ScrollView style={misEstilos.container}>
          <View>
            <Text style={misEstilos.titulo}>A365</Text>
          </View>
        </ScrollView>
    )
}

const misEstilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
        backgroundColor:'blue',
    }
  });