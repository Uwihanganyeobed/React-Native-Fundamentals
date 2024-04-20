import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreeen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import { Pressable,Text } from 'react-native';
const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'
     screenOptions={{
       headerStyle: {
        backgroundColor: '#6a51ae'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
      headerRight: ()=>(      
        <Pressable onPress={()=>alert('Menu Alert!')}>
          <Text style={{color: 'white', fontSize: 16}}>Menu</Text>
        </Pressable>
      ),
      contentStyle: {
        backgroundColor: '#e8e4e5'
      }}
    }>
      <Stack.Screen name='Home'component={HomeScreeen} options={
        {
          title: 'Welcome Home',
         
        }
      } />
      <Stack.Screen name='About'component={AboutScreen}
       initialParams={
        {name:'Guest'}
      } 
      // options={({route })=>({
      //   title: route.params.name
      // })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}