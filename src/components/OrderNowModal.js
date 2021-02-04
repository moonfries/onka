import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon, List } from "native-base";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");

const menus = [
  {
    id: "1",
    image: require("../assets/images/menu2.jpg"),
    name: "Pancit Canton",
    price: 130,
  },
  {
    id: "2",
    image: require("../assets/images/menu3.jpg"),
    name: "Fried Rice",
    price: 190,
  },
  {
    id: "3",
    image: require("../assets/images/menu4.jpg"),
    name: "Sinigang sa gabi",
    price: 200,
  },
];

const Modals = (props) => {
  const { isVisible, onBackdropPress } = props;
  // const [modalBid, setModalBid] = useState(false);
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.3}
        style={styles.modalContainer}
        // onModalShow={() => {
        //   amountInput.current.blur();
        //   setTimeout(() => {
        //     amountInput.current.focus();
        //   }, 100);
        // }}
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
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboard}
        >
          <View style={styles.topContainer}>
            <View style={styles.sheetHeader}>
              <TouchableOpacity onPress={props.onDismiss}>
                <Icon
                  type="Ionicons"
                  name="chevron-down-outline"
                  style={styles.backIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.menu}>Beef Steak</Text>
            <View style={styles.imageContainer}>
              <Icon style={styles.controlsLeft} name="chevron-back-outline" />
              <Image
                source={require("../assets/images/beefsteak.jpg")}
                style={styles.image}
              />
              <Icon
                style={styles.controlsRight}
                name="chevron-forward-outline"
              />
            </View>
            <View>
              <Text style={styles.price}>₱120</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity>
                <View style={styles.minusContainer}>
                  <Icon name="remove-outline" style={styles.minus} />
                </View>
              </TouchableOpacity>
              <View style={styles.countContainer}>
                <Text style={styles.count}>1</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.plusContainer}>
                  <Icon name="add-outline" style={styles.plus} />
                </View>
              </TouchableOpacity>
            </View>

            <List>
              <List
                showsVerticalScrollIndicator={false}
                dataArray={menus}
                vertical={true}
                style={styles.listBody}
                keyExtractor={(menus) => menus.id}
                renderRow={(menu) => (
                  <View style={styles.lists}>
                    <View style={styles.firstList}>
                      <Image source={menu.image} style={styles.listImages} />
                      <Text style={styles.listNames}>{menu.name}</Text>
                    </View>

                    <View style={styles.secondList}>
                      <Text style={styles.listPrices}>{menu.price}</Text>

                      <View style={styles.counter1}>
                        <TouchableOpacity>
                          <View style={styles.minusContainer}>
                            <Icon name="remove-outline" style={styles.minus} />
                          </View>
                        </TouchableOpacity>
                        <View style={styles.countContainer1}>
                          <Text style={styles.count}>1</Text>
                        </View>
                        <TouchableOpacity>
                          <View style={styles.plusContainer}>
                            <Icon name="add-outline" style={styles.plus} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              />
            </List>

            <View style={styles.ordernow}>
              <View style={styles.ordernowContainer}>
                <View style={styles.totalOrder}>
                  <View style={styles.leftTotalOrder}>
                    <Text style={styles.totalText}>Total:</Text>
                    <Text style={styles.totalPrice}>₱ 180</Text>
                  </View>
                  <Text style={styles.ordernowText}>Order Now</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  ordernowIcon: {
    width: 80,
    height: 43,
  },
  sheetContainer: {
    backgroundColor: "white",
  },
  sheetHeader: {
    alignItems: "center",
  },
  controlsLeft: {
    color: "lightgray",
    fontSize: 40,
    marginRight: 30,
  },
  controlsRight: {
    color: "lightgray",
    fontSize: 40,
    marginLeft: 30,
  },
  counter: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    // flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
  },
  counter1: {
    flexDirection: "row",
  },
  countContainer: {
    width: 25,
    height: 30,
    backgroundColor: "lightgray",
  },
  countContainer1: {
    width: 25,
    height: 30,
    backgroundColor: "white",
  },
  count: {
    fontSize: 16,
    marginTop: 5,
    alignSelf: "center",
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  plus: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 2,
  },
  plusContainer: {
    width: 30,
    height: 30,
    backgroundColor: "orange",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  minus: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 2,
  },
  minusContainer: {
    width: 30,
    height: 30,
    backgroundColor: "orange",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 20,
  },
  imageContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  menu: {
    alignSelf: "center",
    marginTop: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  listBody: {
    marginTop: 30,
  },
  lists: {
    justifyContent: "space-between",
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    marginBottom: 1,
    // marginTop: 30,
  },
  firstList: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  secondList: {
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  listImages: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  listNames: {
    marginLeft: 20,
  },
  listPrices: {
    marginRight: 20,
  },
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
  keyboard: {
    flex: 1,
    justifyContent: "flex-end",
  },
  topContainer: {
    height: height / 1.1,
    backgroundColor: "white",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  backIcon: {
    fontSize: 40,
    color: "gray",
  },
  ordernow: {
    flex: 1,
    justifyContent: "flex-end",
  },
  ordernowContainer: {
    height: 75,
    backgroundColor: "red",
  },
  totalOrder: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  leftTotalOrder: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    marginRight: 10,
  },
  totalPrice: {
    color: "white",
    fontSize: 18,
  },
  ordernowText: {
    marginLeft: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Modals;

{
  /* <TouchableOpacity
                style={{ backgroundColor: "red" }}
                onPress={props.onDismiss}
              >
                <View
                  style={{
                    borderRadius: 20,
                    backgroundColor: "lightgray",
                    width: "25%",
                  }}
                />
              </TouchableOpacity> */
}
