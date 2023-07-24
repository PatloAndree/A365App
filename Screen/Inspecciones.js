import React, { useEffect,useState } from 'react';
import {View , ScrollView ,Text , StyleSheet } from 'react-native';
import { ListItem , Icon} from 'react-native-elements';
import nlHelpers from '../Helpers/nlhelper';
import axios from '../Helpers/axios_helper';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import AntDesign  from 'react-native-vector-icons/AntDesign'

export default function Inspecciones(props) {
const [listadoNotificaciones, setListadoNotificaciones] = useState([]);


   useEffect(async () => {
        await axios({
            method: 'post',
            url: "Login/Inspecciones_PT",
            data: null
        }).then(async function (d) {
            let datos = d.data;
            console.log(datos.data);
            let lista = datos.data != '' ? datos.data.split('¬') : [];
            let listado = nlHelpers.stringToArrayOrObject(['id_Inspeccion', 'Nro_cliente', 'Cliente', 'Fecha_pro', 'Estado'], lista)
            console.log(listado);
          
            setListadoNotificaciones(listado);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
  return (
      <ScrollView>      
        <Text style={[misEstilos.titulo]}>Mis Inspecciones </Text>
            <View >
                    {
                        listadoNotificaciones.map((obj, indice) => (
                            <ListItem key={indice} bottomDivider 
                            >
                                <ListItem.Content style={[misEstilos.list]}>
                                    <ListItem.Title style={[misEstilos.TituPrin]}>Inspeccion 00{obj.id_Inspeccion} </ListItem.Title>
                                    <Divider style={[misEstilos.divider]} orientation="vertical" />
                                    <ListItem.Subtitle style={[misEstilos.Titu]} > </ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Nro. Cliente :{obj.Nro_cliente}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Cliente : {obj.Cliente}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} >Fecha Programada : {obj.Fecha_pro}</ListItem.Subtitle>
                                    <ListItem.Subtitle style={[misEstilos.Titu]} > Estado : {obj.Estado}</ListItem.Subtitle>
                                    <AntDesign name='search1' style={[misEstilos.icon1]}>
                                       <Text style={[misEstilos.texticon]}>{"\n"}ver Inspeccion</Text>
                                    </AntDesign>
                                    <AntDesign name='checksquareo' style={[misEstilos.icon2]}>
                                       <Text style={[misEstilos.texticon]}>{"\n"}Realizar {"\n"}Inspeccion</Text>
                                    </AntDesign>
                                    
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
    borderRadius:5,
    backgroundColor:'#f1f1f1',
  },
  TituPrin: {
    color:'#000',
    fontSize:17,
    paddingLeft:13
  },
  Titu: {
    color:'#000',
    fontSize:15,
    paddingTop:2,
    paddingLeft:'5%'
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
  },
  icon1:{
    fontSize:40,
    color:'#0C5393',
    left:'78%',
    bottom:'41%'
  },
  icon2:{
    fontSize:40,
    color:'#0C5393',
    left:'78%',
    bottom:'30%'
  },
  texticon:{
    fontSize:12,
    top:'21%',
    textAlign:'center',
    justifyContent:'center'
  }

});