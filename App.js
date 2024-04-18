import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./Components/Greet";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name='Vargas'/>
      <Greet name='Obed'/>
      {/* <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid data!", "DOB Incorect")}
      />
       <Button
        title="Alert3"
        onPress={() => Alert.alert("Invalid data!", "DOB Incorect",[
          {
            text: 'Cancel',
            onPress: ()=>alert('Cancel Pressed')
          },
          {
            text: 'OK',
            onPress: ()=>alert('OK Pressed')
          }
        ])}
      /> */}
      {/* <ActivityIndicator  />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large"color="midnightblue" />
      <ActivityIndicator size="large"color="midnightblue"animating={false} /> */}
      {/* <StatusBar backgroundColor="#ccc"
       barStyle="dark-content"
        // hidden
     /> */}
    </View>
  );
}

{
  /* <ScrollView>
<Button
    title="Press"
    onPress={() => alert("Button Pressed success")}
    color="midnightblue"
    // disabled
  />
  <Pressable onPress={()=>alert('Image pressed')}>
  <Image source={logoImage} style={{ width: 300, height: 300 }} />
  </Pressable>
  <Pressable onPress={()=>alert('Text pressed')}>
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
    fugiat unde maxime sit magnam dicta error nobis nihil qui esse
    placeat, recusandae nemo amet alias. Asperiores quibusdam quam
    dignissimos ab. Lorem ipsum dolor sit amet consectetur adipisicing
    elit. Aperiam fugiat unde maxime sit magnam dicta error nobis nihil
    qui esse placeat, recusandae nemo amet alias. Asperiores quibusdam
    quam dignissimos ab.
  </Text>
  <Image source={logoImage} style={{ width: 300, height: 300 }} />
  </Pressable>

</ScrollView> */
}

{
  /* <Button
title="Press"
onPress={() => setIsModalVisible(true)}
color="midnightblue"
/>
<Modal
visible={isModalVisible}
onRequestClose={() => setIsModalVisible(false)}
animationType="slide"
presentationStyle="pageSheet"
>
<View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
  <Text>Modal Content</Text>
  <Button
    title="Close"
    color="red"
    onPress={() => setIsModalVisible(false)}
  />
</View>
</Modal> */
}
