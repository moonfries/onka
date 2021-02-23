import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const basketscreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/shrimp.jpg")}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};

export default basketscreen;

const styles = StyleSheet.create({});
