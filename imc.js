import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 TouchableWithoutFeedback, 
 Keyboard,
 View,
 ScrollView
} from 'react-native';

export default class Imc extends React.Component {
    constructor(props){
        super(props)
        this.state = {altura:0,massa:0,resultado:0,resultadoText:""}
        this.calcular = this.calcular.bind(this)
      }
      calcular(){
       let imc = this.state.massa / (this.state.altura * this.state.altura)
       let s = this.state
       s.resultado = imc
       if(s.resultado < 1.6){
         s.resultadoText ='Muito abaixo do peso'
       }
        else if (s.resultado < 1.8){
         s.resultadoText ='Magro'
        }
        else if (s.resultado < 2.5) {
         s.resultadoText ='Saudavel'
        }
        else if (s.resultado < 3.0) {
         s.resultadoText ='Sobrepeso'
        }
        else if (s.resultado < 3.5) {
         s.resultadoText ='Obesidade Grau 1°'
        }
        else if (s.resultado < 4.0) {
          s.resultadoText ='Obesidade Grau 2°'
        }
        else{
          s.resultadoText ='Obesidade Grau 3°'
        }
       this.setState(s)
    
    
    
      }
    
      render() {
        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{flex: 1}}>
                  <ScrollView>
                    <View style={styles.container}>
                        
                        <View style={styles.entrada}>
                        <TextInput autoCapitalize="none" placeholder="Altura(Cm)" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
                        <TextInput autoCapitalize="none" placeholder="Massa(Gr)"  keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
                        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
                        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>
                
                    </View>
                  </ScrollView>
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