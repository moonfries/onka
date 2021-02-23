import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./store.style";
import StoreMenu from "../../components/StoreMenu";
import { Entypo } from "@expo/vector-icons";

const storepage = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../../assets/images/arrowblack.png")}
                style={styles.backarrow}
              />
            </TouchableOpacity>
            <Text style={styles.name}>Chef Bea </Text>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <Image
              source={require("../../assets/images/banner.jpg")}
              style={styles.banner}
            />

            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/chef.png")}
                style={styles.profilepic}
              />
              <View style={styles.rightContainer}>
                <View style={styles.rightTopContainer}>
                  <View style={styles.starContainer}>
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={styles.star}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={styles.star}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={styles.star}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={styles.star}
                    />
                    <Image
                      source={require("../../assets/images/star.png")}
                      style={styles.star}
                    />
                  </View>
                  <View style={styles.reviewsContainer}>
                    <Image
                      source={require("../../assets/images/edit.png")}
                      style={styles.edit}
                    />
                    <Text style={styles.reviewCounts}>132 reviews</Text>
                  </View>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/images/call.png")}
                      style={styles.msg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/images/messagebutton.png")}
                      style={styles.msg}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require("../../assets/images/followbutton.png")}
                      style={styles.msg}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.midContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.username}>@chefbea</Text>
              <View style={styles.kmContainer}>
                <Image
                  source={require("../../assets/images/nearbymarker.png")}
                  style={styles.nearbymarker}
                />
                <Text style={styles.kmText}>0.8km</Text>
              </View>
            </View>
            <Text style={styles.locationText}>
              Dasmarinas sampaloc2, Malinta Cavite
            </Text>
            <Text style={styles.bio}>
              Lorem ipsum dolor sit amet, consectetur adipis cing litsed do
              eiusmod.
            </Text>
            <View style={styles.line} />
            <View style={styles.followers}>
              <View style={styles.followersContainer}>
                <View style={styles.imageContainer1}>
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Image
                    source={require("../../assets/images/chef3.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef4.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={styles.images}
                  />
                </View>
                <Text style={styles.followersText}>Followers</Text>
                <Text style={styles.followersCount}>40</Text>
              </View>
              <View style={styles.followersContainer}>
                <View style={styles.imageContainer1}>
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Image
                    source={require("../../assets/images/chef3.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef4.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef1.png")}
                    style={styles.images}
                  />
                </View>
                <Text style={styles.followersText}>Customers</Text>
                <Text style={styles.followersCount}>20</Text>
              </View>
              <View style={styles.followersContainer}>
                <View style={styles.imageContainer1}>
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Image
                    source={require("../../assets/images/chef3.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef4.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={styles.images}
                  />
                  <Image
                    source={require("../../assets/images/chef3.png")}
                    style={styles.images}
                  />
                </View>
                <Text style={styles.followersText}>Recommends</Text>
                <Text style={styles.followersCount}>50</Text>
              </View>
            </View>
            <View style={styles.line} />
          </View>
          <StoreMenu />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default storepage;
