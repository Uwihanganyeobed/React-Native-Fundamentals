import {
   View,
   Text,
   StyleSheet,
   Button
 } from "react-native";
 import { useNavigation } from "@react-navigation/native";
 
 export default function CourseListScreen() {
   return (
     <View style={styles.container}>
       <Text style={styles.text}>CourseList Screen</Text>
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