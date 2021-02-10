import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { List } from "native-base";

const orders = [
  {
    id: "1",
    image: require("../assets/images/chef2.png"),
    name: "Shara Santos",
    food: "Bulalo",
    datetime: "8 Jan at 2:05pm",
  },
  {
    id: "2",
    image: require("../assets/images/chef3.png"),
    name: "Trish Ramirez",
    food: "Sinigang",
    datetime: "9 Jan at 11:05pm",
  },
  {
    id: "3",
    image: require("../assets/images/chef4.png"),
    name: "Trish Santos",
    food: "Pork sisig",
    datetime: "2 Feb at 12:05pm",
  },
];

const { width } = Dimensions.get("window");

const OrderModal = (props) => {
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
            <View style={{ height: 30 }}>
              <Image
                source={require("../assets/images/line.png")}
                style={styles.line}
              />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={props.onDismiss}>
            <View style={styles.bar} />
          </TouchableOpacity> */}
          <List>
            <List
              showsVerticalScrollIndicator={false}
              dataArray={orders}
              vertical={true}
              style={styles.listBody}
              keyExtractor={(orders) => orders.id}
              renderRow={(order) => (
                <View style={styles.body}>
                  <View style={styles.imageContainer}>
                    <Image source={order.image} style={styles.image} />
                  </View>
                  <View style={styles.space}>
                    <View style={styles.rightContainer}>
                      <Text style={styles.name}>{order.name}</Text>
                      <Text style={styles.ordered}>ordered</Text>
                      <Text style={styles.food}>{order.food}</Text>
                    </View>
                    <Text style={styles.date}>{order.datetime}</Text>
                  </View>
                </View>
              )}
            />
          </List>
        </View>
      </Modal>
    </View>
  );
};

export default OrderModal;

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
  listBody: {
    marginTop: 30,
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#f1f1f1",
    marginBottom: 1,
  },
  imageContainer: {
    marginLeft: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 25,
  },
  space: {
    marginLeft: 10,
  },
  ordered: {
    marginLeft: 5,
    color: "#424242",
    fontSize: 14,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  name: {
    color: "#424242",
    fontWeight: "bold",
    fontSize: 14,
  },
  food: {
    marginLeft: 5,
    color: "#424242",
    fontWeight: "bold",
    fontSize: 14,
  },
  date: {
    color: "#b4b4b4",
    fontSize: 11,
  },
  line: {
    width: width / 4,
    height: 15,
    alignSelf: "center",
    marginTop: 7,
  },
});
