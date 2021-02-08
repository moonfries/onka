import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ShareModal from "./ShareModal";

const Share = () => {
  const [modalBid, setModalBid] = useState(false);
  return (
    <View style={styles.iconName}>
      <TouchableOpacity
        onPress={() => {
          setModalBid(!modalBid);
        }}
        style={styles.shareContainer}
      >
        <Image
          source={require("../assets/images/sharefood.png")}
          style={styles.sharefoodIcon}
        />
        <Text style={styles.subText}> 4</Text>
      </TouchableOpacity>

      <ShareModal
        isVisible={modalBid}
        onDismiss={() => {
          setModalBid(!modalBid);
        }}
      />
    </View>
  );
};

export default Share;

const styles = StyleSheet.create({
  iconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareContainer: {
    flexDirection: "row",
    width: 20,
  },
  sharefoodIcon: {
    width: 18,
    height: 18,
  },
  subText: {
    fontSize: 12,
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
