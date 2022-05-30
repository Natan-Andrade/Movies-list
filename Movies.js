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

export default function Test2 () {

    const [movies, setMovies] = useState(null);
    const [abas, setAbas] = useState(0);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1',{
            method:'GET'
        })
        .then(Response => Response.json())
        .then(function(json){
            
            setMovies(json);
        })
    },[])

    if(movies != null){
      return (
        <View>
            {
                movies.results.map(function(val){
                    if(val.id == abas){
                        return (
                            <View>
                                <TouchableOpacity onPress={()=>setAbas(val.id)}>
                                    <Text style={{textAlign:'center'}}>{val.original_title}</Text>
                                </TouchableOpacity>
                                <Text>{val.overview}</Text>
                            </View>
                        )
                    }else{
                        return (
                            <View>
                                <TouchableOpacity onPress={()=>setAbas(val.id)}>
                                    <Text style={{textAlign:'center'}}>{val.original_title}</Text>
                                </TouchableOpacity> 
                            </View>
                        )
                    }
                })
            }
        </View>
     )
    }else{
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        )   
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