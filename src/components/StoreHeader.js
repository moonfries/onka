import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const StoreHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/images/arrowblack.png")}
          style={styles.backarrow}
        />
      </TouchableOpacity>
      <Text style={styles.name}>Chef Bea </Text>
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default StoreHeader;

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backarrow: {
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3a404c",
  },
});
