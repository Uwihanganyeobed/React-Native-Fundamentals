import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from "./Screens/CourseListScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import SettingScreen from "./Screens/SettingScreen";
import Ionicons from '@expo/vector-icons/Ionicons'
import {AboutStack} from './AppStack'
const Tab=createBottomTabNavigator()

export default function App(){
   return(
      <NavigationContainer>
         <Tab.Navigator screenOptions={{
            tabBarLabelPosition: 'below-icon',
            tabBarShowLabel: true,
            tabBarActiveTintColor: 'purple',
            // tabBarInactiveTintColor
         }
         }>
            <Tab.Screen name="Course List"component={CourseListScreen} />
            <Tab.Screen name="Profile"component={ProfileScreen} options={{
               tabBarLabel: 'My Profile',
               tabBarIcon: ({color})=><Ionicons name="person"size={20} color={color}/>,
               tabBarBadge: 3,
            }} />
            <Tab.Screen name="Settings"component={SettingScreen} />
            <Tab.Screen name="AboutStack"component={AboutStack} options={{
               headerShown: false
            }} />
         </Tab.Navigator>
      </NavigationContainer>
   )}