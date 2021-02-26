import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/images/arrowblack.png")}
          style={styles.backarrow}
        />
      </TouchableOpacity>
      <Text style={styles.name}>Akina Shimizu </Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/images/menublack.png")}
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

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
  menu: {
    width: 17,
    height: 17,
  },
});
