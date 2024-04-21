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
  StyleSheet,
  SafeAreaView,
  Platform
} from "react-native";
import Cart from "./Components/Core-Components/Cart";
import Box from "./Components/RNLayout/Box";
import Greet from "./Components/Core-Components/Greet";
import StyleSheetAPI from "./Components/styleSheetAPI/StyleSheetAPI";
import UIDynamic from "./Components/DynamicUI/UIDynamic";
import UIWindow from "./Components/DynamicUI/UIWindow";
import CustomButton from "./Components/DynamicUI/customButton/customButton.android";
const logoImage = require("./assets/adaptive-icon.png");
export default function App() {
  const [count, setCount]=useState(0)
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={{backgroundColor: 'plum', flex: 1}}>
    {/* <StyleSheetAPI/> */}
    {/* <UIDynamic/> */}
    {/* <UIWindow/> */}
    <CustomButton title="press me"onPress={()=>alert('pressed')}/>
    </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    // // height: 300,
    // // flexGrow: 1,
    // // flexWrap: 'wrap',
    // // rowGap: 20,
    // // columnGap: 30,
    // // gap: 20,
    // // alignContent: 'space-around' ,
    // marginTop: 30,
    // borderWidth: 6,
    // // flexDirection: 'row',
    // // justifyContent: "flex-end",
    // // alignItems: 'baseline',
    // borderColor: 'lightblue'
  }
})

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

    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Greet name='Vargas'/>
    //   <Greet name='Obed'/>
    //   <View>
    //     <Cart count={count}/>
    //     <Button title="Increment Cart" onPress={()=>setCount(count+1)}  />
    //     <Button title="Decrement Cart" onPress={()=>count>0 && setCount(count-1)} />
    //     <Button title="Reset Cart" onPress={()=>setCount(0)} />
    //   </View>
    // </View>