import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const InboxHeader = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/images/arrowblack.png")}
              style={styles.backarrow}
            />
          </TouchableOpacity>
          <Text style={styles.name}>Inbox</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="search1" size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InboxHeader;

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
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  backarrow: {
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 18,
    color: "#495057",
    marginLeft: 10,
  },
  menu: {
    width: 17,
    height: 17,
  },
});
