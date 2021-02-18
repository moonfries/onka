import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const storescreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../../assets/images/shrimp.jpg")}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};

export default storescreen;

const styles = StyleSheet.create({});
