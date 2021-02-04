import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import Modal from "react-native-modal";
import MenuSupply from "../components/MenuSupply";
import OrderNowModal from "./OrderNowModal";

export default function OrderNow() {
  // const [visible, dismiss] = useKeyboard();
  const [modalBid, setModalBid] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setModalBid(!modalBid);
        }}
      >
        <Image
          source={require("../assets/images/ordernow.png")}
          style={styles.ordernowIcon}
        />
      </TouchableOpacity>
      <OrderNowModal
        isVisible={modalBid}
        onDismiss={() => {
          setModalBid(!modalBid);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ordernowIcon: {
    width: 80,
    height: 43,
  },
});
