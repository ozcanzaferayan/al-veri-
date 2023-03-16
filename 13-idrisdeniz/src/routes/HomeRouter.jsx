import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HopiScreen from "../screens/Home/HopiScreen";
import HopiShopScreen from "../screens/Home/HopiShopScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

const HomeRouter = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Tab.Screen name="Hopi" component={HopiScreen} />
      <Tab.Screen name="HopiShop" component={HopiShopScreen} />
    </Tab.Navigator>
  );
};

export default HomeRouter;

const styles = StyleSheet.create({});
