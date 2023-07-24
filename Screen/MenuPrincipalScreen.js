import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View,Text, Modal,StyleSheet, Image, Alert , TouchableWithoutFeedback , Pressable} from "react-native";
import { Icon, Divider, useTheme } from 'react-native-elements';
import LoginScreen from './LoginScreen';

export default function Menu_Principal(props) {
const [Id] = useState(props.route.params?.Id);
    return (
        <View style={misEstilos.container}>

            <View style={misEstilos.container_titu}>
                <Text style={[misEstilos.titu_inicio]}>A365</Text> 
            </View>

            <View style={[misEstilos.user]}>
                <Image style={[misEstilos.imageuser]}  source={require('../assets/user.png')}></Image>
                <Text style={[misEstilos.textuser]}>BIENVENIDO</Text>
                <Text style={[misEstilos.textuser2]}>Usuario : {Id}</Text>

            </View>

            <Divider style={[misEstilos.divider]} orientation="horizontal" />

          {/* Vistas de Menu Principal */}
            <View style={[misEstilos.viewRow , misEstilos.col24 , misEstilos.col]}>
                <TouchableWithoutFeedback 
                            onPress={() => {
                                  props.navigation.navigate('Inspecciones')
                                }}
                              >
                            <Image
                              style={[misEstilos.image]}
                              // resizeMode="contain"
                              source={require('../assets/insp1.png')}
                            />
                    </TouchableWithoutFeedback>
            </View>

            <View style={[misEstilos.viewRow , misEstilos.col24 , misEstilos.col]}>
              <TouchableWithoutFeedback 
                          onPress={() => {
                                props.navigation.navigate('Ubicacion')
                              }}
                            >
                          <Image
                            style={[misEstilos.image]}
                            // resizeMode="contain"
                            source={require('../assets/ubi1.png')}
                          />
                  </TouchableWithoutFeedback>
            </View>

            <View style={[misEstilos.viewRow2 , misEstilos.col224 , misEstilos.col2]}>
              <TouchableWithoutFeedback 
                          onPress={() => {
                                props.navigation.navigate('Notificaciones')
                              }}
                            >
                          <Image
                            style={[misEstilos.image]}
                            // resizeMode="contain"
                            source={require('../assets/noti1.png')}
                          />
                </TouchableWithoutFeedback>
            </View>

            <View style={[misEstilos.viewRow2 , misEstilos.col224 , misEstilos.col2]}>
                  <TouchableWithoutFeedback style={[misEstilos.border]}
                        onPress={() => {
                          Alert.alert(
                            "Sincronizar",
                            "Va a sincronizar la información hasta el momento??",
                            [
                              {
                                text: "Sincronizar",
                                onPress: () => alert("Se sincronizo la información "),
                                style: "cancel"
                              },
                              { text: "Cancelar", onPress: () => console.log("Cancel Pressed") }
                            ]
                          );
                            }}
                          >
                        <Image
                          style={[misEstilos.image]}
                          // resizeMode="contain"
                          source={require('../assets/sinc1.png')}
                        />
                {/* <Icon style={[misEstilos.icon]} name='logout' color='#fff'/> */}

                </TouchableWithoutFeedback>
            </View>
      </View> 
      
    )
}
const misEstilos = StyleSheet.create({
    container: {
         backgroundColor: '#E6E5E5',
         alignItems: 'center',
         justifyContent: 'center',
    },
    container_titu: {
         backgroundColor:'#0F5DA5',
         width:'100%',
         height:'6%',
         flexDirection:'row',
         borderBottomColor:'black', 
         textAlign:'center',
         justifyContent:'center',
         color:'white',
         top:'24%'
    },
    titu_inicio: {
        textAlign:'center',
        fontSize:20,
        alignItems:'center',
        top:'3%',
        justifyContent:'center',
        color:'#fff',
     },
     icon:{
        fontSize:30,
        top:18,
        paddingLeft:300,
        color:'white',
     },
     user :{
        backgroundColor:'#05304C',
        flexDirection:'column',
        width:'80%',
        height:'10%',
        fontSize:25,
        top:'14%',
        borderRadius:10,
        textAlign:'center'
     },
     imageuser:{
        top:'38%',
        left:'7%',
        width:40,
        height:40
     },
     textuser:{
        textAlign:'center',
        bottom:'30%',
        fontSize:16,
        color:'#f1f1f1',
     },
     textuser2:{
      marginLeft:'24%',
      bottom:'15%',
      fontSize:16,
      color:'#f1f1f1',
   },
     viewRow: {
        width:'100%',
        flexDirection:'column',
        top:'20%',
        marginBottom:40
      },
      col: {
        paddingRight: 3,
        paddingLeft: 8
      },
      col24: {
        width: '100%',
      },
      image: {
        width:180,
        height:190,
      },
      viewRow2: {
        width:'30%',
        flexDirection:'row',
        bottom:'67%',
        marginBottom:40
       },
       col2: {
        paddingRight: 40,
        paddingLeft: 60
       },
       col224: {
         width: '30%',
       },
       divider:{
         
         borderBottomColor:'#2B78E4',
         borderBottomWidth: 3,
         width:'95%',
         top:'16%'
       }
    
  });

