import * as React from 'react';
import {useEffect,useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { 
  Text, 
  View, 
  Button, 
  SafeAreaView, 
  StyleSheet, 
  StatusBar, 
  TextInput, 
  TouchableOpacity,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imc from './imc';
import Todo from './todo';
import Test from './testArea';
import Test2 from './test2';



console.disableYellowBox = true;

function HomeScreen() {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Test2></Test2>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({

        headerStyle: {
          backgroundColor:'rgba(0, 0, 0, 0.13)',
          shadowOpacity:0
        },

        headerTitleStyle:{
          color: 'black'
        },

        tabBarStyle:{
          backgroundColor:'rgba(0, 0, 0, 0.13)',
          shadowOpacity:0,
          borderTopWidth:0
        },


        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  headerStyle1: {
    backgroundColor:'rgba(0, 0, 0, 0.13)',
    shadowOpacity:0
  },
});