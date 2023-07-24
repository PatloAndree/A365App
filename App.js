import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screen/LoginScreen'
import PantallaPrincipal from './Screen/PantallaPrincipal';
import MenuPrincipalScreen from './Screen/MenuPrincipalScreen'
import Inspecciones from './Screen/Inspecciones';
import Notificaciones from './Screen/Notificaciones';
import Ubicacion from './Screen/Ubicacion';
//Declarando variables constantes
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //Menu de Navegacion
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} 
                                                                            options={
                                                                              {
                                                                                headerShown: true}}
                                                                            />
        <Stack.Screen name="Inspecciones" component={Inspecciones} options={{headerShown: true}}/>
        <Stack.Screen name="Notificaciones" component={Notificaciones} options={{headerShown: true}}/>
        <Stack.Screen name="MenuPrincipalScreen" component={MenuPrincipalScreen} options={ {
                                                                                           headerLeft:null,
                                                                                          headerShown: false} }/>
        <Stack.Screen name="  " component={Ubicacion} options={{headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

