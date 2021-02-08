import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import NearbyModal from "./NearbyModal";

const Nearby = () => {
  const [modalBid, setModalBid] = useState(false);
  return (
    <View style={styles.iconName}>
      <TouchableOpacity
        onPress={() => {
          setModalBid(!modalBid);
        }}
        style={styles.nearbymarkerContainer}
      >
        <Image
          source={require("../assets/images/nearbymarker.png")}
          style={styles.nearbymarkerIcon}
        />
        <Text style={styles.subText}> 0.5</Text>
      </TouchableOpacity>

      <NearbyModal
        isVisible={modalBid}
        onDismiss={() => {
          setModalBid(!modalBid);
        }}
      />
    </View>
  );
};

export default Nearby;

const styles = StyleSheet.create({
  iconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  nearbymarkerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 30,
  },
  nearbymarkerIcon: {
    width: 20,
    height: 20,
  },
  subText: {
    fontSize: 12,
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
