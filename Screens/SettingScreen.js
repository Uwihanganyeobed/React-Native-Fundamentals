import {
   View,
   Text,
   StyleSheet,
   Button
 } from "react-native";
 import { useNavigation } from "@react-navigation/native";
 
 export default function SettingScreen() {
   return (
     <View style={styles.container}>
       <Text style={styles.text}>Setting Screen</Text>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
   }
 });