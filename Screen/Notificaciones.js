import React, { useEffect,useState } from 'react';
import {View , ScrollView ,Text , StyleSheet} from 'react-native';
import { ListItem , Avatar} from 'react-native-elements';
import nlHelpers from '../Helpers/nlhelper';
import axios from '../Helpers/axios_helper';
import { Divider } from 'react-native-elements/dist/divider/Divider';
export default function Notificaciones(props) {

const [listadoNotificaciones, setListadoNotificaciones] = useState([]);
   useEffect(async () => {
        await axios({
            method: 'post',
            url: "Login/Notificacion_PT",
            data: null
        }).then(async function (d) {
            let datos = d.data;
            console.log(datos.data);
            let lista = datos.data != '' ? datos.data.split('¬') : [];
            let listado = nlHelpers.stringToArrayOrObject(['id_fact', 'Nom_cliente', 'Dni', 'Direccion', 'Fecha'], lista)
            console.log(listado);
            setListadoNotificaciones(listado);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
  return (
      <ScrollView>      
        <Text style={[misEstilos.titulo]}>Mis Notificaciones </Text>
            <View >
                    {
                        listadoNotificaciones.map((obj, indice) => (
                            <ListItem key={indice} bottomDivider 
                              onPress={() => props.navigation.navigate('Inspecciones', {
                                                                      id_fac: obj.id_fact,
                                                                      Nom_cliente: obj.Nom_cliente,
                                                                      dni: obj.Dni,
                                                                      Direccion: obj.Direccion,
                                                                      Fecha: obj.Fecha,
                                }) }
                            >
                                <ListItem.Content style={[misEstilos.list]}>
                                    <ListItem.Title style={[misEstilos.TituPrin]}> Nueva Inspección</ListItem.Title>
                                    <Divider style={[misEstilos.divider]} orientation="vertical" />
                                    <ListItem.Subtitle style={[misEstilos.TituFecha]} >{obj.Fecha}</ListItem.Subtitle>
                                    <ListItem.Title style={[misEstilos.Titu]}>Código : {obj.id_fact}  </ListItem.Title>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Cliente: {obj.Nom_cliente}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Dni: {obj.Dni}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Direccion:{obj.Direccion}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
            </View>
        </ScrollView>
  );
}
const misEstilos = StyleSheet.create({
  titulo:{
    fontSize:20,
    textAlign:'center',
    backgroundColor:'#2B78E4',
    color:'#fff',
  },
  list:{
    backgroundColor:'#E6E5DC',
    borderRadius:20
  },
  TituPrin: {
    color:'#000',
    fontSize:14,
    paddingLeft:13
  },
  Titu: {
    color:'#1B384E',
    fontSize:12,
    paddingLeft:130,
    bottom:20
  },
  TituFecha: {
    color:'#2A8087',
    fontSize:13,
    fontWeight:'bold',
    paddingLeft:12,
    top:40
  },
  divider:{
    borderBottomColor:'#fff',
    borderBottomWidth: 1
  }
}); 