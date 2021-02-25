import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const NotificationHeader = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/images/arrowblack.png")}
            style={styles.backarrow}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationHeader;

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backarrow: {
    width: 25,
    height: 25,
  },
  clear: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#212529",
  },
});
