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
import { Entypo, AntDesign } from "@expo/vector-icons";
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
            <View style={styles.header}>
              <TouchableOpacity onPress={props.onDismiss}>
                <Icon style={styles.controlsLeft} name="chevron-back-outline" />
              </TouchableOpacity>
              <Text style={styles.menu}>Beef Steak</Text>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <Text style={styles.imageCount}>1/4</Text>
            <View style={styles.imageContainer}>
              <Image
                source={require("../assets/images/beefsteak.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.info}>
              <Text>
                Marinate beef in soy sauce, lemon and pepper for at least one
                hour.
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Image
                source={require("../assets/images/peso.png")}
                style={styles.priceImage}
              />
              <Text style={styles.price}>120</Text>
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
                  <View>
                    <View style={styles.lists}>
                      <View style={styles.firstList}>
                        <Image source={menu.image} style={styles.listImages} />
                        <Text style={styles.listNames}>{menu.name}</Text>
                      </View>

                      <View style={styles.secondList}>
                        <View style={styles.priceListContainer}>
                          <Image
                            source={require("../assets/images/peso1.png")}
                            style={styles.pesoList}
                          />
                          <Text style={styles.listPrices}>{menu.price}</Text>
                        </View>
                        <View style={styles.counter1}>
                          <TouchableOpacity>
                            <View style={styles.minusContainer}>
                              <Icon
                                name="remove-outline"
                                style={styles.minus}
                              />
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
                    <View style={styles.borderList} />
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
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  imageCount: {
    alignSelf: "center",
  },
  info: {
    alignSelf: "center",
    width: width / 1.3,
    marginTop: 10,
  },
  controlsLeft: {
    color: "black",
    fontSize: 40,
  },
  priceContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  priceImage: {
    width: 20,
    height: 19,
  },
  priceListContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  pesoList: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  counter: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  counter1: {
    flexDirection: "row",
  },
  countContainer: {
    width: 24,
    height: 26,
    backgroundColor: "lightgray",
  },
  countContainer1: {
    width: 24,
    height: 26,
    backgroundColor: "white",
  },
  count: {
    fontSize: 12,
    marginTop: 5,
    alignSelf: "center",
  },
  price: {
    fontSize: 20,
  },
  plus: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 3,
  },
  plusContainer: {
    width: 24,
    height: 26,
    backgroundColor: "orange",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  minus: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 3,
  },
  minusContainer: {
    width: 24,
    height: 26,
    backgroundColor: "orange",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    height: 200,
    width: 220,
    borderRadius: 20,
  },
  imageContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  menu: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  listBody: {
    marginTop: 25,
    backgroundColor: "#212529",
  },
  lists: {
    justifyContent: "space-between",
    backgroundColor: "#212529",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    // marginBottom: 1,
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
    width: 60,
    height: 60,
    borderRadius: 12,
    borderColor: "#fff",
    borderWidth: 4,
  },
  listNames: {
    marginLeft: 10,
    color: "#fff",
  },
  listPrices: {
    marginRight: 20,
    color: "#fff",
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
    height: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  ordernow: {
    flex: 1,
    justifyContent: "flex-end",
  },
  ordernowContainer: {
    height: 60,
    backgroundColor: "red",
  },
  totalOrder: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
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
  borderList: {
    borderWidth: 0.2,
    alignSelf: "center",
    borderColor: "gray",
    width: width / 1.15,
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
