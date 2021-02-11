import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { List } from "native-base";

const { width } = Dimensions.get("window");

const chefDiscoveries = [
  {
    id: "1",
    image: require("../assets/images/chef1.jpg"),
    name: "Chef Lea",
    nearby: "0.5",
    comment: "25",
    order: "15",
  },
  {
    id: "2",
    image: require("../assets/images/chef2.jpg"),
    name: "Chef Yana",
    nearby: "1.5",
    comment: "5",
    order: "9",
  },
  {
    id: "3",
    image: require("../assets/images/chef3.jpg"),
    name: "Chef Kim",
    nearby: "5.5",
    comment: "15",
    order: "45",
  },
];

const foodDiscoveries = [
  {
    id: "4",
    image: require("../assets/images/menu3.jpg"),
    name: "Burger Steak",
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
    image: require("../assets/images/menu4.jpg"),
    name: "Beef Bulalo",
    image1: require("../assets/images/likeheart.png"),
    pesosign: require("../assets/images/peso1.png"),
    price: "120",
    nearby: "5.5",
    comment: "15",
    commentimage: require("../assets/images/comments.png"),
    order: "45",
  },
];

const FilterFoods = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <List>
          <List
            showsVerticalScrollIndicator={false}
            dataArray={chefDiscoveries}
            vertical={true}
            style={styles.listBody}
            keyExtractor={(chefDiscoveries) => chefDiscoveries.id}
            renderRow={(chefDiscovery) => (
              // <View style={styles.secondContainer}>
              <ImageBackground
                source={chefDiscovery.image}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image1}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/featured1.png")}
                    style={styles.featured}
                  />
                  <View>
                    <View style={styles.bottomContainer}>
                      <View style={styles.nameContainer}>
                        <View>
                          <Text style={styles.name}>{chefDiscovery.name}</Text>
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
                            {/* <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" /> */}
                          </View>
                        </View>
                        <Image
                          source={require("../assets/images/followwhite.png")}
                          style={styles.follow}
                        />
                        {/* <Feather name="bookmark" size={24} color="#fff" /> */}
                      </View>
                      <View style={styles.bottomContainer1}>
                        <View style={styles.icons}>
                          <Image
                            source={require("../assets/images/nearbymarker.png")}
                            style={styles.nearbyImage}
                          />
                          <Text style={styles.iconText}>
                            {chefDiscovery.nearby}
                          </Text>
                        </View>
                        <View style={styles.icons}>
                          <Image
                            source={require("../assets/images/edit.png")}
                            style={styles.editImage}
                          />
                          <Text style={styles.iconText}>
                            {chefDiscovery.comment}
                          </Text>
                        </View>
                        <View style={styles.icons}>
                          <Image
                            source={require("../assets/images/ordertrack.png")}
                            style={styles.orderTrack}
                          />
                          <Text style={styles.iconText}>
                            {chefDiscovery.order}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              // </View>
            )}
          />
        </List>
        <List>
          <List
            showsVerticalScrollIndicator={false}
            dataArray={foodDiscoveries}
            vertical={true}
            style={styles.listBody}
            keyExtractor={(foodDiscoveries) => foodDiscoveries.id}
            renderRow={(foodDiscovery) => (
              // <View style={styles.secondContainer}>
              <ImageBackground
                source={foodDiscovery.image}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image1}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/featured1.png")}
                    style={styles.featured}
                  />
                  <View>
                    <View style={styles.bottomContainer}>
                      <View style={styles.nameContainer}>
                        <View>
                          <Text style={styles.name}>{foodDiscovery.name}</Text>
                          <View style={styles.starContainer}>
                            <Image
                              source={foodDiscovery.pesosign}
                              style={styles.pesoSign}
                            />
                            <Text style={styles.name}>
                              {foodDiscovery.price}
                            </Text>
                          </View>
                        </View>
                        <Image
                          source={foodDiscovery.image1}
                          style={styles.heartImage}
                        />
                      </View>
                      <View style={[styles.bottomContainer1, { marginTop: 2 }]}>
                        <View style={styles.icons}>
                          <Image
                            source={require("../assets/images/nearbymarker.png")}
                            style={styles.nearbyImage}
                          />
                          <Text style={styles.iconText}>
                            {foodDiscovery.nearby}
                          </Text>
                        </View>
                        <View style={styles.icons}>
                          <Image
                            source={foodDiscovery.commentimage}
                            style={styles.commentImage}
                          />
                          <Text style={styles.iconText}>
                            {foodDiscovery.comment}
                          </Text>
                        </View>
                        <View style={styles.icons}>
                          <Image
                            source={require("../assets/images/ordertrack.png")}
                            style={styles.orderTrack}
                          />
                          <Text style={styles.iconText}>
                            {foodDiscovery.order}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              // </View>
            )}
          />
        </List>
      </View>
    </ScrollView>
  );
};

export default FilterFoods;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image1: {
    width: width / 2.4,
    height: 260,
    borderRadius: 20,
    marginBottom: 20,
  },
  imageContainer: {
    height: "100%",
    justifyContent: "space-between",
  },
  featured: {
    width: 50,
    height: 52,
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
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  },
  bottomContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    marginTop: 5,
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
});

{
  /* <ImageBackground
  source={foodDiscovery.image}
  imageStyle={{ borderRadius: 20 }}
  style={styles.image1}
>
  <View style={styles.imageContainer}>
    <Image
      source={require("../assets/images/featured1.png")}
      style={styles.featured}
    />
    <View>
      <View style={styles.bottomContainer}>
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.name}>{discovery.name}</Text>
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
          <Image
            source={require("../assets/images/followwhite.png")}
            style={styles.follow}
          />
        </View>
        <View style={styles.bottomContainer1}>
          <View style={styles.icons}>
            <Image
              source={require("../assets/images/nearbymarker.png")}
              style={styles.nearbyImage}
            />
            <Text style={styles.iconText}>{discovery.nearby}</Text>
          </View>
          <View style={styles.icons}>
            <Image
              source={require("../assets/images/edit.png")}
              style={styles.editImage}
            />
            <Text style={styles.iconText}>{discovery.comment}</Text>
          </View>
          <View style={styles.icons}>
            <Image
              source={require("../assets/images/ordertrack.png")}
              style={styles.orderTrack}
            />
            <Text style={styles.iconText}>{discovery.order}</Text>
          </View>
        </View>
      </View>
    </View>
  </View>
</ImageBackground>; */
}
