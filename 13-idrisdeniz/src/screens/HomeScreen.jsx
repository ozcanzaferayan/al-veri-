import * as React from "react";
import { Image } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <Image
      style={styles.image}
      source={require("../../HopiImages/logohopi.png")}
    />
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  image: {
    padding: 12,
    marginTop: 8,
    width: 100,
    height: 42,
  },
});
