import {
   View,
   Text,
   StyleSheet,
   Button
 } from "react-native";
 import { useNavigation } from "@react-navigation/native";
 
 export default function DashboardScreen({navigation}) {
   return (
     <View style={styles.container}>
       <Text style={styles.text}>Dashboard Screen</Text>
       <Button title="Toggle Drawer"onPress={()=>navigation.toggleDrawer()}/>
       <Button title="Settings"onPress={()=>navigation.jumpTo('Settings')}/>
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