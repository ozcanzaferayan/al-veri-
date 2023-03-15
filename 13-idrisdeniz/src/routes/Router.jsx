import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import WalletScreen from "../screens/WalletScreen";
import CodeScreen from "../screens/CodeScreen";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ana Sayfa" component={HomeScreen}/>
      <Tab.Screen name="Kategoriler" component={CategoriesScreen} />
      <Tab.Screen name="QR Kodum" component={CodeScreen} />
      <Tab.Screen name="Cüzdanım" component={WalletScreen} />
      <Tab.Screen name="Hesabım" component={AccountScreen}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}