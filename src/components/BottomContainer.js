import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Nearby from "./Nearby";
import Order from "./Order";
import Share from "./Share";
import Comment from "./Comment";

const BottomContainer = () => {
  return (
    <View style={styles.fourthContainer}>
      <View style={styles.subIconContainer}>
        <Nearby />
        <Order />
        <Comment />
        <Share />
        <View style={styles.iconName}>
          <TouchableOpacity style={styles.nearbymarkerContainer}>
            <Image
              source={require("../assets/images/likeheart.png")}
              style={styles.likeheartIcon}
            />
          </TouchableOpacity>
          <Text style={styles.subText}> 78</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomContainer;

const styles = StyleSheet.create({
  fourthContainer: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  subIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  nearbymarkerContainer: {
    width: 20,
  },
  nearbymarkerIcon: {
    width: 20,
    height: 20,
  },
  orderIconContainer: {
    width: 30,
  },
  orderIcon: {
    width: 30,
    height: 30,
  },
  sharefoodIcon: {
    width: 18,
    height: 18,
  },
  likeheartIcon: {
    width: 18,
    height: 18,
  },
  subText: {
    fontSize: 12,
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
