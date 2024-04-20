
import {
  View,
  FlatList,
  SectionList,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput,
  Switch
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name,setName]=useState('');
  const [isDarkMode, setisDarkMode]=useState(false);
  return (

  <SafeAreaView style={styles.container}>
    <TextInput style={styles.input} value={name}onChangeText={setName}
    placeholder="email@vargas.com"
    autoCorrect={false}
    autoCapitalize="none"
    // secureTextEntry
    // keyboardType=""
    />
    <TextInput style={[styles.input, styles.multilineText]} placeholder="message"multiline />
    <Text style={styles.text}>My name is {name}</Text>
    <View style={styles.switchContainer}>
    <Text style={styles.text}>Dark Mode</Text>
    <Switch value={isDarkMode} onValueChange={()=>setisDarkMode((prev)=> !prev)}
    trackColor={{ false: "#767577", true: 'lightblue'}}
    thumbColor="#f4f3f4" />
    </View>
  </SafeAreaView>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text:{
    fontSize: 30,
    padding: 10
  },
  multilineText:{
minHeight: 100,
textAlignVertical: 'top'
  },
  switchContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
});

// import {StyleSheet, SafeAreaView,Platform,ScrollView} from 'react-native'
// import PokemonCard from './components/PokemonCard';
// export default function App(){
//   const charmander={
//     name: "Charmander",
//     image: require('./assets/charmander.png'),
//     type: "Fire",
//     hp: 39,
//     moves: ["Stratch", "Ember","Growl","Leer"],
//     weaknesses: ["Water", "Rock"],
//   };
//   const squirtleData = {
//     name: "Squirtle",
//     image: require("./assets/squirtle.png"), // Replace with the actual image path
//     type: "Water",
//     hp: 44,
//     moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
//     weaknesses: ["Electric", "Grass"],
//   };

//   const bulbasaurData = {
//     name: "Bulbasaur",
//     image: require("./assets/bulbasaur.png"), // Replace with the actual image path
//     type: "Grass",
//     hp: 45,
//     moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
//     weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
//   };

//   const pikachuData = {
//     name: "Pikachu",
//     image: require("./assets/pikachu.png"), // Replace with the actual image path
//     type: "Electric",
//     hp: 35,
//     moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
//     weaknesses: ["Ground"],
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <PokemonCard {...charmander}/>
//       <PokemonCard {...squirtleData} />
//       <PokemonCard {...bulbasaurData} />
//       <PokemonCard {...pikachuData} />
//       </ScrollView>

//     </SafeAreaView>
//   )
// }
// const styles=StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     paddingTop: Platform.OS==='android'?30:0,
//   }
// });
// >>>>>>> 7de8f83d3b55d010c6c516b2121c95d8063ce11a
