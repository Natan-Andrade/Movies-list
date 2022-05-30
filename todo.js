import { validatePathConfig } from '@react-navigation/native';
import React from 'react';
import {useEffect,useState} from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 TouchableWithoutFeedback, 
 Keyboard,
 View,
 ScrollView,
} from 'react-native';

export default function Todo(){


    
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{flex: 1}}>
                    <View>
                        <View style={{flexDirection:'row', margin:10}}>
                            <TextInput onChangeText={text => setTarefaAtual(text)} autoFocus={true} placeholder="Nova tarefa" keyboardType="text" style={styles.input}/>
                            <TouchableOpacity style={styles.button} onPress={''}><Text style={styles.buttontext}>S</Text></TouchableOpacity>
                        </View>
                    </View>
                  
                    <View>
                        <Text style={styles.todo}>Tarefas:</Text>
                    </View>

                    <ScrollView>
                        <Text></Text>
                    </ScrollView>


                </View>
            </TouchableWithoutFeedback>
        );
      
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        marginLeft:50,
        padding: 5,
        fontSize: 30,
        height: 44,
    },
    input:{
        height:60,
        textAlign:"center",
        width:"83%",
        fontSize:50,
      },
      button:{
        backgroundColor:"#ffa200",
        width:"17%",
        borderRadius:50,


       },
       buttontext:{
         textAlign:"center",
         padding:10,
         fontSize:40,
         fontWeight:'bold',
         color:"#fff",
       },

       todo:{
        textAlign:"center",
        padding:10,
        fontSize:25,
        fontWeight:'bold',
        color:'#262626'
       }
})