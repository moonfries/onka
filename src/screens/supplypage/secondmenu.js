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
  Touchable,
} from "react-native";
import Swiper from "react-native-swiper";
import { AntDesign } from "@expo/vector-icons";
import MainHeader from "../../components/MainHeader1";
import ChatNow from "../../components/ChatNow";
import OrderNow from "../../components/OrderNow";
import MenuSupply from "../../components/MenuSupply1";
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
              <Text style={styles.foodName}>Fresh Shrimp</Text>
              <View style={styles.infoContainer1}>
                <View style={styles.info}>
                  <Text style={styles.infoText}>
                    Lorem Ipsum dolor example text here only
                  </Text>
                </View>
                {/* <TouchableOpacity>
                  <Image
                    source={require("../../assets/images/ribbonwhite.png")}
                    style={styles.ribbonwhite}
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
          <View style={styles.thirdContainer}>
            <View style={styles.chatOrderContainer}>
              <ChatNow navigation={navigation} />
              <View style={styles.profileContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Store")}
                  style={styles.pic}
                >
                  <Image
                    source={require("../../assets/images/follow.png")}
                    style={styles.followIcon}
                  />
                  <Image
                    source={require("../../assets/images/chef3.png")}
                    style={styles.profile}
                  />
                </TouchableOpacity>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameText}>Juls Market</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={{ width: 10, height: 10, marginRight: 2 }}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={{ width: 10, height: 10, marginRight: 2 }}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={{ width: 10, height: 10 }}
                    />
                    {/* <AntDesign name="star" size={10} color="yellow" />
                    <AntDesign name="star" size={10} color="yellow" />
                    <AntDesign name="star" size={10} color="yellow" /> */}
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
