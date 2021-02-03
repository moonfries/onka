import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MenuSupply from "../../components/MenuSupply";
import styles from "./home.style";

export default function homepage() {
  const width = useWindowDimensions().width;
  const height = "100%";

  const [active, setActive] = useState(0);

  const images = [
    {
      id: 1,
      image: require("../../assets/images/menu1.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/images/menu2.jpg"),
    },
  ];

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={change}
          showHorizontalScrollIndicator={false}
          style={{ width, height }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image.image}
              style={{ width, height, resizeMode: "cover" }}
            />
          ))}
        </ScrollView>
      </View>
      {/* <ImageBackground
        source={require("../../assets/images/menu1.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      > */}
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <View>
          {/* <Image
            source={require("../../assets/images/gradienttop.png")}
            style={{ height: "40%" }}
          /> */}
          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.touchIcons}>
              <Image
                source={require("../../assets/images/search.png")}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchIcons}>
              <Image
                source={require("../../assets/images/inboxmessage.png")}
                style={styles.inboxmessageIcon}
              />
            </TouchableOpacity>
            <MenuSupply />
            <TouchableOpacity style={styles.touchIcons}>
              <Image
                source={require("../../assets/images/notifications.png")}
                style={styles.notificationsIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchIcons1}>
              <Image
                source={require("../../assets/images/menu.png")}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../assets/images/play.png")}
            style={{
              marginTop: 200,
              alignSelf: "center",
              width: 60,
              height: 75,
            }}
          />
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.infoContainer}>
            <Image
              source={require("../../assets/images/featured.png")}
              style={styles.featuredImage}
            />
            <Text style={styles.foodName}>Salmon</Text>
            <View style={styles.infoContainer1}>
              <View style={styles.info}>
                <Text style={styles.infoText}>
                  It is compromised of thin slices of salmon and union. Juicy
                  and Spicy
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/ribbonwhite.png")}
                  style={styles.ribbonwhite}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <View style={styles.chatOrderContainer}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/chatnow.png")}
                style={styles.chatIcon}
              />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
              <Image
                source={require("../../assets/images/follow.png")}
                style={styles.followIcon}
              />
              <Image
                source={require("../../assets/images/chef.png")}
                style={styles.profile}
              />
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>ChefBea12</Text>
                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="star" size={10} color="yellow" />
                  <AntDesign name="star" size={10} color="yellow" />
                  <AntDesign name="star" size={10} color="yellow" />
                  <AntDesign name="star" size={10} color="yellow" />
                  <AntDesign name="star" size={10} color="yellow" />
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/ordernow.png")}
                style={styles.ordernowIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fourthContainer}>
          <View style={styles.subIconContainer}>
            <View style={styles.iconName}>
              <TouchableOpacity style={styles.nearbymarkerContainer}>
                <Image
                  source={require("../../assets/images/nearbymarker.png")}
                  style={styles.nearbymarkerIcon}
                />
              </TouchableOpacity>
              <Text style={styles.subText}>0.5</Text>
            </View>
            <View style={styles.iconName}>
              <TouchableOpacity style={styles.orderIconContainer}>
                <Image
                  source={require("../../assets/images/ordertrack.png")}
                  style={styles.orderIcon}
                />
              </TouchableOpacity>
              <Text style={styles.subText}>42</Text>
            </View>
            <View style={styles.iconName}>
              <TouchableOpacity style={styles.nearbymarkerContainer}>
                <Image
                  source={require("../../assets/images/comments.png")}
                  style={styles.nearbymarkerIcon}
                />
              </TouchableOpacity>
              <Text style={styles.subText}>152</Text>
            </View>
            <View style={styles.iconName}>
              <TouchableOpacity style={styles.nearbymarkerContainer}>
                <Image
                  source={require("../../assets/images/sharefood.png")}
                  style={styles.sharefoodIcon}
                />
              </TouchableOpacity>
              <Text style={styles.subText}> 4</Text>
            </View>
            <View style={styles.iconName}>
              <TouchableOpacity style={styles.nearbymarkerContainer}>
                <Image
                  source={require("../../assets/images/likeheart.png")}
                  style={styles.likeheartIcon}
                />
              </TouchableOpacity>
              <Text style={styles.subText}>78</Text>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            height: "35%",
            zIndex: 1,
          }}
        /> */}
      </View>
      {/* <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Image
            source={require("../../assets/images/gradientbottom.png")}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </View> */}
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}
