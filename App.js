
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
import LoginForm from "./components/LoginForm";

export default function App() {
  const [name,setName]=useState('');
  const [isDarkMode, setisDarkMode]=useState(false);
  return (

  <SafeAreaView style={styles.container}>
    {/* <TextInput style={styles.input} value={name}onChangeText={setName}
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
    thumbColor="#f4f4f4" />
    </View> */}
    <LoginForm/>
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
