import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";
import MainHeader from "../../components/MainHeader";
import ChatNow from "../../components/ChatNow";
import OrderNow from "../../components/OrderNow";
import MenuSupply from "../../components/MenuSupply";
import styles from "./home.style";
import BottomContainer from "../../components/BottomContainer";

const { width } = Dimensions.get("window");

const secondmenu = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/menu1.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.body}>
          <MainHeader navigation={navigation} />
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
              <ChatNow navigation={navigation} />
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
              <OrderNow />
            </View>
          </View>
          <BottomContainer />
        </View>
      </ImageBackground>
    </View>
  );
};

export default secondmenu;
