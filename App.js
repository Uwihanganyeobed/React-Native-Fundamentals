<<<<<<< HEAD
<<<<<<< HEAD
import {View,FlatList,SectionList, Text,StyleSheet,ScrollView,StatusBar,SafeAreaView} from 'react-native'
import pokemonList from './data.json' 
import sectionData from './groupedData.json'
export default function App(){
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {pokemonList.map(pokemon=>{
        return (
          <View style={styles.card} key={pokemon.id}>
          <Text style={styles.cardText}>{pokemon.type}</Text>
          <Text style={styles.cardText}>{pokemon.name}</Text>
          </View>
        )
      })}
      </ScrollView>
     */}
     <View style={styles.scrollView}>
     {/* <FlatList
     data={pokemonList}
     renderItem={({item})=>{
      return(
        <View style={styles.card} key={item.id}>
        <Text style={styles.cardText}>{item.type}</Text>
        <Text style={styles.cardText}>{item.name}</Text>
        </View>
      
      )

     }}
     keyExtractor={(item,index)=> item.id.toString()}
     ItemSeparatorComponent={<View style={{height: 16}} />}
     ListEmptyComponent={<Text>No items Found</Text>}
     ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
     ListFooterComponent={<Text style={styles.footerText}>end of list</Text>}
       // horizontal
     /> */}

     <SectionList
     sections={sectionData}
     renderItem={({item})=>{
      return(
        <View style={styles.card}>
          <Text style={styles.cardText}>{item}</Text>
        </View>
      )
     }}
     renderSectionHeader={({section})=>(
      <Text style={styles.sectionHeaderText}>{section.type}</Text>
     )}
     ItemSeparatorComponent={()=><View style={{height: 16}} />}
     SectionSeparatorComponent={()=><View style={{height: 16}} />}

     />
     </View>

      </SafeAreaView>
    )
=======
import {
  View,
  FlatList,
  SectionList,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TextInput
} from "react-native";
import { useState } from "react";

export default function App() {
  const [name,setName]=useState('')
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
  }
});
>>>>>>> 996a1fd0f5dabd88c0df323dd1a6c29882fa9155
=======
import {StyleSheet, SafeAreaView,Platform,ScrollView} from 'react-native'
import PokemonCard from './components/PokemonCard';
export default function App(){
  const charmander={
    name: "Charmander",
    image: require('./assets/charmander.png'),
    type: "Fire",
    hp: 39,
    moves: ["Stratch", "Ember","Growl","Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...charmander}/>
      <PokemonCard {...squirtleData} />
      <PokemonCard {...bulbasaurData} />
      <PokemonCard {...pikachuData} />
      </ScrollView>

    </SafeAreaView>
  )
<<<<<<< HEAD
>>>>>>> 7de8f83d3b55d010c6c516b2121c95d8063ce11a
=======
>>>>>>> 996a1fd0f5dabd88c0df323dd1a6c29882fa9155
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
<<<<<<< HEAD
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  card:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText:{
    fontSize: 30
  },
  headerText:{
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  sectionHeaderText:{
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
=======
    paddingTop: Platform.OS==='android'?30:0,
  }
});
>>>>>>> 7de8f83d3b55d010c6c516b2121c95d8063ce11a
