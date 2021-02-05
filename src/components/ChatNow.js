import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const ChatNow = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
        <Image
          source={require("../assets/images/chatnow.png")}
          style={styles.chatIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatNow;

const styles = StyleSheet.create({
  chatIcon: {
    width: 80,
    height: 43,
  },
});
