import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { List } from "native-base";

const { width } = Dimensions.get("window");

const restaurants = [
  {
    id: "1",
    image: require("../assets/images/resto1.jpg"),
    logo: require("../assets/images/restologo1.png"),
    name: "Holly Halo",
    nearby: "0.5",
    comment: "25",
    order: "15",
  },
  {
    id: "2",
    image: require("../assets/images/resto2.jpg"),
    logo: require("../assets/images/restologo2.png"),
    name: "FoodBae",
    nearby: "1.5",
    comment: "5",
    order: "9",
  },
  {
    id: "3",
    image: require("../assets/images/resto3.jpg"),
    logo: require("../assets/images/restologo3.png"),
    name: "Banana Que",
    nearby: "5.5",
    comment: "15",
    order: "45",
  },
];

const secondRestaurants = [
  {
    id: "4",
    image: require("../assets/images/resto3.jpg"),
    logo: require("../assets/images/restologo3.png"),
    name: "BurgerKing",
    image1: require("../assets/images/likeheart.png"),
    pesosign: require("../assets/images/peso1.png"),
    price: "260",
    nearby: "5.5",
    comment: "15",
    commentimage: require("../assets/images/comments.png"),
    order: "45",
  },
  {
    id: "5",
    image: require("../assets/images/resto2.jpg"),
    logo: require("../assets/images/restologo2.png"),
    name: "Montser",
    image1: require("../assets/images/likeheart.png"),
    pesosign: require("../assets/images/peso1.png"),
    price: "120",
    nearby: "5.5",
    comment: "15",
    commentimage: require("../assets/images/comments.png"),
    order: "45",
  },
];

const RestaurantTab = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Image
        source={require("../assets/images/menu4.jpg")}
        style={styles.banner}
      />

      <View style={styles.labelContainer}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fd7e14" }}>
          Local Restaurants
        </Text>
        <Entypo name="dots-three-vertical" size={17} color="black" />
      </View>

      <View style={styles.container}>
        <List>
          <List
            showsVerticalScrollIndicator={false}
            dataArray={restaurants}
            vertical={true}
            style={styles.listBody}
            keyExtractor={(restaurants) => restaurants.id}
            renderRow={(restaurant) => (
              <View style={styles.backgroundContainer}>
                <ImageBackground
                  source={restaurant.image}
                  imageStyle={{ borderRadius: 20 }}
                  style={styles.image1}
                >
                  <View style={styles.imageContainer}>
                    <View style={styles.topIcons}>
                      <Image
                        source={require("../assets/images/featured1.png")}
                        style={styles.featured}
                      />
                      <Image
                        source={require("../assets/images/follow.png")}
                        style={styles.followMe}
                      />
                    </View>
                    <View style={styles.logoContainer}>
                      <Image source={restaurant.logo} style={styles.logo} />
                    </View>

                    <View style={{ alignSelf: "center" }}>
                      <Text style={styles.name}>{restaurant.name}</Text>
                      <View style={styles.starContainer}>
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                      </View>
                    </View>
                    <View style={styles.bottomContainer1}>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/nearbymarker.png")}
                          style={styles.nearbyImage}
                        />
                        <Text style={styles.iconText}>{restaurant.nearby}</Text>
                      </View>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/edit.png")}
                          style={styles.editImage}
                        />
                        <Text style={styles.iconText}>
                          {restaurant.comment}
                        </Text>
                      </View>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/ordertrack.png")}
                          style={styles.orderTrack}
                        />
                        <Text style={styles.iconText}>{restaurant.order}</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.imagesBottomContainer}>
                  <View style={styles.imagesContainer}>
                    <Image
                      source={require("../assets/images/menu1.jpg")}
                      style={styles.images}
                    />
                    <Image
                      source={require("../assets/images/menu2.jpg")}
                      style={styles.images}
                    />
                    <Image
                      source={require("../assets/images/menu5.jpg")}
                      style={styles.images}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </List>
        <List>
          <List
            showsVerticalScrollIndicator={false}
            dataArray={secondRestaurants}
            vertical={true}
            style={styles.listBody}
            keyExtractor={(secondRestaurants) => secondRestaurants.id}
            renderRow={(secondRestaurant) => (
              <View style={styles.backgroundContainer}>
                <ImageBackground
                  source={secondRestaurant.image}
                  imageStyle={{ borderRadius: 20 }}
                  style={styles.image1}
                >
                  <View style={styles.imageContainer}>
                    <View style={styles.topIcons}>
                      <Image
                        source={require("../assets/images/featured1.png")}
                        style={styles.featured}
                      />
                      <Image
                        source={require("../assets/images/follow.png")}
                        style={styles.followMe}
                      />
                    </View>
                    <View style={styles.logoContainer}>
                      <Image
                        source={secondRestaurant.logo}
                        style={styles.logo}
                      />
                    </View>

                    <View style={{ alignSelf: "center" }}>
                      <Text style={styles.name}>{secondRestaurant.name}</Text>
                      <View style={styles.starContainer}>
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                        <Image
                          source={require("../assets/images/star.png")}
                          style={styles.star}
                        />
                      </View>
                    </View>
                    <View style={styles.bottomContainer1}>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/nearbymarker.png")}
                          style={styles.nearbyImage}
                        />
                        <Text style={styles.iconText}>
                          {secondRestaurant.nearby}
                        </Text>
                      </View>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/edit.png")}
                          style={styles.editImage}
                        />
                        <Text style={styles.iconText}>
                          {secondRestaurant.comment}
                        </Text>
                      </View>
                      <View style={styles.icons}>
                        <Image
                          source={require("../assets/images/ordertrack.png")}
                          style={styles.orderTrack}
                        />
                        <Text style={styles.iconText}>
                          {secondRestaurant.order}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.imagesBottomContainer}>
                  <View style={styles.imagesContainer}>
                    <Image
                      source={require("../assets/images/menu5.jpg")}
                      style={styles.images}
                    />
                    <Image
                      source={require("../assets/images/menu2.jpg")}
                      style={styles.images}
                    />
                    <Image
                      source={require("../assets/images/menu3.jpg")}
                      style={styles.images}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </List>
      </View>
    </View>
  );
};

export default RestaurantTab;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  banner: {
    height: 197,
    width: 393,
  },
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundContainer: {
    backgroundColor: "gray",
    width: width / 2.4,
    height: 260,
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  image1: {
    width: width / 2.4,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  imageContainer: {
    height: "100%",
    justifyContent: "space-between",
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  featured: {
    width: 50,
    height: 52,
  },
  followMe: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginTop: 10,
  },
  bottomContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 67,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  nameContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 7,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  priceText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    alignSelf: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  star: {
    width: 8,
    height: 8,
  },
  follow: {
    width: 18,
    height: 18,
  },
  pesoSign: {
    width: 10,
    height: 10,
    marginRight: 2,
  },
  heartImage: {
    width: 18,
    height: 18,
    marginTop: -5,
  },
  bottomContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
  },
  logoContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#fff",
  },
  imagesBottomContainer: {
    height: 70,
    backgroundColor: "#212529",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imagesContainer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
  },
  nearbyImage: {
    width: 14,
    height: 14,
  },
  editImage: {
    width: 12,
    height: 12,
  },
  commentImage: {
    height: 14,
    width: 14,
  },
  orderTrack: {
    width: 19,
    height: 19,
  },
  iconText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 2,
  },
  images: {
    borderRadius: 10,
    height: 40,
    width: width / 9,
  },
});
