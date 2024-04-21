import { View, Button,StyleSheet, Text,SafeAreaView } from "react-native"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Vargas</Text>
    </SafeAreaView>
  )
}

export default App

const styles=StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'plum',
      padding: 50,
      // margin: 30
   }
})