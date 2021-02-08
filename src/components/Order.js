import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import OrderModal from "./OrderModal";

const Order = () => {
  const [modalBid, setModalBid] = useState(false);
  return (
    <View style={styles.iconName}>
      <TouchableOpacity
        onPress={() => {
          setModalBid(!modalBid);
        }}
        style={styles.orderIconContainer}
      >
        <Image
          source={require("../assets/images/ordertrack.png")}
          style={styles.orderIcon}
        />
        <Text style={styles.subText}> 42</Text>
      </TouchableOpacity>

      <OrderModal
        isVisible={modalBid}
        onDismiss={() => {
          setModalBid(!modalBid);
        }}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  iconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 30,
  },
  orderIcon: {
    width: 30,
    height: 30,
  },
  subText: {
    fontSize: 12,
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
