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
import MenuSupply from "../components/MenuSupply1";

function MainHeader1({ navigation }) {
  return (
    <View>
      {/* <Image
            source={require("../../assets/images/gradienttop.png")}
            style={{ height: "40%" }}
          /> */}
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={styles.touchSearchIcons}
        >
          <Image
            source={require("../assets/images/search.png")}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Inbox")}
          style={styles.touchIcons}
        >
          <Image
            source={require("../assets/images/inboxmessage.png")}
            style={styles.inboxmessageIcon}
          />
        </TouchableOpacity>
        <MenuSupply navigation={navigation} />
        <TouchableOpacity
          onPress={() => navigation.navigate("Notification")}
          style={styles.touchIcons}
        >
          <Image
            source={require("../assets/images/notifications.png")}
            style={styles.notificationsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={styles.touchIcons1}
        >
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatarIcon}
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

export default MainHeader1;

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
  touchSearchIcons: {
    width: 30,
    height: 20,
    marginTop: 5,
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
  avatarIcon: {
    width: 18,
    height: 18,
    marginBottom: -2,
  },
});
