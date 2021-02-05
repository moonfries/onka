import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import MenuSupply from "../components/MenuSupply";

function MainHeader({ navigation }) {
  return (
    <View>
      {/* <Image
            source={require("../../assets/images/gradienttop.png")}
            style={{ height: "40%" }}
          /> */}
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.touchIcons}
        >
          <Image
            source={require("../assets/images/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchIcons}>
          <Image
            source={require("../assets/images/inboxmessage.png")}
            style={styles.inboxmessageIcon}
          />
        </TouchableOpacity>
        <MenuSupply />
        <TouchableOpacity style={styles.touchIcons}>
          <Image
            source={require("../assets/images/notifications.png")}
            style={styles.notificationsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchIcons1}>
          <Image
            source={require("../assets/images/menu.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/play.png")}
        style={{
          marginTop: 200,
          alignSelf: "center",
          width: 60,
          height: 75,
        }}
      />
    </View>
  );
}

export default MainHeader;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  touchIcons: {
    width: 20,
  },
  touchIcons1: {
    width: 15,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginBottom: -5,
  },
  inboxmessageIcon: {
    width: 20,
    height: 20,
  },
  notificationsIcon: {
    width: 18,
    height: 18,
    marginBottom: -2,
  },
  menuIcon: {
    width: 15,
    height: 15,
    marginBottom: -2,
  },
});
