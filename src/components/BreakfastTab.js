import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon, List } from "native-base";

const menus = [
  {
    id: "1",
    image: require("../assets/images/pancitcanton.png"),
    name: "Pancit Canton",
    price: 130,
  },
  {
    id: "2",
    image: require("../assets/images/friedrice.png"),
    name: "Fried Rice",
    price: 120,
  },
  {
    id: "3",
    image: require("../assets/images/sisig.png"),
    name: "Sisig",
    price: 100,
  },
  {
    id: "4",
    image: require("../assets/images/pancitcanton.png"),
    name: "Pancit Canton",
    price: 130,
  },
  {
    id: "5",
    image: require("../assets/images/friedrice.png"),
    name: "Fried Rice",
    price: 120,
  },
  // {
  //   id: "6",
  //   image: require("../assets/images/pancitcanton.png"),
  //   name: "Pancit Canton",
  //   price: 130,
  // },
];

const { width } = Dimensions.get("window");

const BreakfastTab = () => {
  return (
    <View style={{ marginBottom: 15 }}>
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
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.firstList}>
                    <Image source={menu.image} style={styles.listImages} />
                  </View>
                  <View style={styles.mid}>
                    <Text style={styles.listNames}>{menu.name}</Text>
                    <View style={styles.bestseller}>
                      <Image
                        source={require("../assets/images/bestseller.png")}
                        style={styles.bestsellerImage}
                      />
                      <Text style={styles.bestsellerText}>Best Seller</Text>
                    </View>
                    <Text style={styles.desc}>
                      Hinaloan ng masarap na shrimp at cabbage. Puno sa panlasa.
                    </Text>
                  </View>
                </View>
                <View style={styles.secondList}>
                  <View style={styles.priceListContainer}>
                    <Image
                      source={require("../assets/images/peso.png")}
                      style={styles.pesoList}
                    />
                    <Text style={styles.listPrices}>{menu.price}</Text>
                  </View>
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
              <View style={styles.borderList} />
            </View>
          )}
        />
      </List>
    </View>
  );
};

export default BreakfastTab;

const styles = StyleSheet.create({
  priceListContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
  },
  pesoList: {
    width: 14,
    height: 14,
    // marginRight: 2,
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
  mid: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: width / 2.4,
    marginLeft: 10,
  },
  bestseller: {
    flexDirection: "row",
    alignItems: "center",
  },
  bestsellerImage: {
    width: 11,
    height: 11,
  },
  bestsellerText: {
    color: "#495057",
    fontSize: 10,
    marginLeft: 3,
  },
  desc: {
    fontSize: 12,
    color: "#495057",
    marginTop: 5,
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
    // marginTop: 15,
    backgroundColor: "#E8ECEF",
  },
  lists: {
    justifyContent: "space-between",
    backgroundColor: "#DDDFEA",
    flexDirection: "row",
    alignItems: "center",
    height: 120,
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
  },
  listImages: {
    width: 90,
    height: 90,
    borderRadius: 12,
    borderColor: "#fff",
    // borderWidth: 4,
  },
  listNames: {
    color: "black",
  },
  listPrices: {
    marginLeft: 3,
    marginRight: 20,
    fontSize: 16,
    color: "#2C2E34",
  },
  borderList: {
    borderWidth: 0.2,
    alignSelf: "center",
    borderColor: "#ffffff",
    width: width / 1.15,
  },
});
