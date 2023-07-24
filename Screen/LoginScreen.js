import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableOpacity} from 'react-native';
// import Position from 'react-native/Libraries/Components/Touchable/Position';
// import Splash from './Login/Splash';

export default function LoginScreen(props) {
const [id,setId] = useState('');
const [pass,setPass] = useState('123');

  return (
    <View style={misEstilos.container}>
      <Image style={misEstilos.image}  source={require('../assets/logoF.png')}></Image>
      {/* <Text style={misEstilos.titulo}>A<Text style={misEstilos.titulo2}>365</Text></Text> */}
      <Text style={misEstilos.subtitulo}  >Inspecciones Vehiculares</Text>   
      <TextInput 
        style={[misEstilos.textinput]}  placeholder='Usuario'
        onChangeText={value => {setId(value)}}
        defaultValue={id}
        />
      <TextInput style={misEstilos.textinput} placeholder='Contraseña'
         secureTextEntry={true} 

      />
      {/* <Button style={misEstilos.botton}
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Ingresar"
      /> */}
      <TouchableOpacity style={misEstilos.botton} onPress={() => {
            if( id != ''){
              props.navigation.navigate('MenuPrincipalScreen', {Id:id}) 
            }else 
            {
              props.navigation.navigate('MenuPrincipalScreen')
            }
      }}>
      <Text style={misEstilos.bottonText}>INGRESAR</Text>   
      </TouchableOpacity>
      {/* </TextInput><Touchable style={misEstilos.button} onp></Touchable> */}
      <Text style={misEstilos.footer}>A365 App V.0.0.1</Text>   
      <StatusBar style='auto' />
    </View>
  );
}
const misEstilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize:80,
    fontWeight:'bold',
    textAlign:'center',
    color:'blue'
  },
  subtitulo:{
    fontSize:18,
    color:'#000',
    paddingBottom:10,
    bottom:50
  },
  textinput:{
    paddingLeft: 20,
    paddingRight: 20,
    padding: 10,
    marginTop:10,
    width:'85%',
    height:50,
    backgroundColor:'#EAEAEA',
    borderRadius:5,
    marginBottom:10
  },
  image:{
    width:280,
    height:170,
    bottom:'5%'
  },
  botton:{
    marginTop:40,
    width:'85%',
    borderRadius:5,
    paddingTop:10,
    backgroundColor:'#0F5DA5',
    height:50
  },
  bottonText :{
    fontSize:17,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center'
  },
  footer :{
    fontSize:15,
    flex:.10,
    top:140,
    color:'#0F5DA5'
  }

});
