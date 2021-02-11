import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "../utils/scale";

const Tab = (props) => {
  const { selectedTab, handleTabSelect } = props;

  return (
    <View style={styles.tab}>
      <View
        style={[
          styles.iconContainer,
          selectedTab === "chef" && { marginTop: -11.5 },
        ]}
      >
        <TouchableOpacity onPress={() => handleTabSelect("chef")}>
          <Image
            source={require("../assets/images/chef_.png")}
            style={[
              styles.image,
              selectedTab === "chef" && { width: 65, height: 65 },
            ]}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 12 }}>Chef</Text>
      </View>

      <View
        style={[
          styles.iconContainer1,
          selectedTab === "food" && { marginTop: -11.5 },
        ]}
      >
        <TouchableOpacity onPress={() => handleTabSelect("food")}>
          <Image
            source={require("../assets/images/food.png")}
            style={[
              styles.image,
              selectedTab === "food" && { width: 65, height: 65 },
            ]}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 12 }}>Food</Text>
      </View>
      <View
        style={[
          styles.iconContainer1,
          selectedTab === "restaurants" && { marginTop: -11.5 },
        ]}
      >
        <TouchableOpacity onPress={() => handleTabSelect("restaurants")}>
          <Image
            source={require("../assets/images/restaurants.png")}
            style={[
              styles.image,
              selectedTab === "restaurants" && { width: 65, height: 65 },
            ]}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 12 }}>Restaurants</Text>
      </View>
      <View
        style={[
          styles.iconContainer1,
          selectedTab === "coffee" && { marginTop: -11.5 },
        ]}
      >
        <TouchableOpacity onPress={() => handleTabSelect("coffee")}>
          <Image
            source={require("../assets/images/coffee.png")}
            style={[
              styles.image,
              selectedTab === "coffee" && { width: 65, height: 65 },
            ]}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontSize: 12 }}>Coffee</Text>
      </View>
    </View>
  );
};
export default Tab;

const styles = StyleSheet.create({
  tab: {
    // height: 24,
    // backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    // padding: scale(6),
    // marginHorizontal: scale(17.5),
    // marginTop: verticalScale(17.5),
  },
  iconContainer: {
    alignItems: "center",
  },
  iconContainer1: {
    alignItems: "center",
    marginLeft: 5,
  },
  image: {
    width: 53,
    height: 53,
  },
  // background: {
  //   height: 23,
  //   // width: scale(164),
  //   flex: 1,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   borderRadius: 4,
  // },
  text: {
    width: "100%",
    textAlignVertical: "center",
  },
});
