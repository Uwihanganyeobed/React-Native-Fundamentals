import { useState } from "react";
import { View, Text,Platform,Image,KeyboardAvoidingView, TextInput, Button, StyleSheet } from "react-native";
export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView behavior="padding"keyboardVerticalOffset={Platform.OS=='ios'? 100: 0} style={styles.container}>
      <View style={styles.form}>
         <Image source={require('../assets/adaptive-icon.png')} style={styles.img} />
        <Text style={styles.label}>UserName</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your username"
          value={username}
          onChangeText={setUserName}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "gray",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  img:{
   width: 200,
   height: 200,
   alignSelf: 'center',
   marginBottom: 50
  }
});
