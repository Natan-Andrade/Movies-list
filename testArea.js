import React,{useState, useEffect} from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 TouchableWithoutFeedback, 
 Keyboard,
 View,
 Button,
 ScrollView,
} from 'react-native';

export default function Test () {

    const [estado,setarEstado] = useState('leitura');
    const [anotacao, setarAnotacao] = useState('');

    function atualizarTexto(){
      setarEstado('leitura');

    }

    if(estado == 'leitura'){
      return (
        <View>
          <Text>App anotação</Text>
          {
            (anotacao != '')?
            <View>
              <Text>{anotacao}</Text>
            </View>
            :
            <View>
            <Text style={{opacity:0.3 }}>Crie uma nova anotação</Text>
          </View>
          }
          <TouchableOpacity 
          onPress={() =>setarEstado('atualizando')}>
            <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
        </View>
    );
    }else if(estado == 'atualizando'){
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

        <View>
            <TextInput 
            onChangeText={(text) => setarAnotacao(text)} 
            multiline={true} numberOfLines={5} 
            value={anotacao} 
            style={{fontSize:30}}></TextInput>
          
          <TouchableOpacity 
          onPress={() =>atualizarTexto()} 
          style={{marginTop:200}}>
            <Text style={{fontSize:30}}>Save</Text>
          </TouchableOpacity>
        </View>

        </TouchableWithoutFeedback>
    );
    }
    
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      entrada:{
        width:'100%',
      },
      input:{
        height:60,
        textAlign:"center",
        width:"100%",
        fontSize:50,
        margin:15
      },
      button:{
       backgroundColor:"#9ACD32",
      },
      buttontext:{
        textAlign:"center",
        padding:30,
        fontSize:25,
        fontWeight:'bold',
        color:"green",
      },
      resultado:{
        alignSelf:"center",
        color:"lightgray",
        fontSize:45,
        fontWeight:'bold',
        padding: 6,
        margin:10
      },
    });