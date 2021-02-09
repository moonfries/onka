import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Touchable,
} from "react-native";
import Modal from "react-native-modal";
import { Entypo, AntDesign, EvilIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ShareModal = (props) => {
  const { isVisible, onBackdropPress } = props;
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.3}
        style={styles.modalContainer}
        swipeThreshold={200}
        onSwipeComplete={onBackdropPress}
        swipeDirection="down"
        hideModalContentWhileAnimating
        scrollHorizontal
        propagateSwipe
        useNativeDriver
        animationInTiming={350}
        animationOutTiming={350}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        scrollOffset={200}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={props.onDismiss}>
            <View style={styles.bar} />
          </TouchableOpacity>
          <View style={styles.body}>
            <Text style={styles.text}>Share Now</Text>

            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <View style={styles.backgroundIcons}>
                  <EvilIcons
                    name="sc-facebook"
                    size={40}
                    color="#fff"
                    style={{ alignSelf: "center", marginTop: 10 }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.backgroundIcons}>
                  <Entypo
                    name="twitter"
                    size={30}
                    color="#fff"
                    style={{ alignSelf: "center", marginTop: 10 }}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.backgroundIcons}>
                  <AntDesign
                    name="instagram"
                    size={24}
                    color="white"
                    style={{ alignSelf: "center", marginTop: 12 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ShareModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    elevation: 5,
  },
  topContainer: {
    height: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bar: {
    backgroundColor: "gray",
    height: 15,
    alignSelf: "center",
    borderRadius: 20,
    width: width / 3.5,
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 20,
  },
  backgroundIcons: {
    backgroundColor: "#87CEEB",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
