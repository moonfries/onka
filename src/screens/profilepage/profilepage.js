import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
} from "react-native";
import styles from "./profile.style";

const profilepage = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          {/* <View> */}

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require("../../assets/images/arrowblack.png")}
                style={styles.backarrow}
              />
            </TouchableOpacity>
            <Text style={styles.name}>Akina Shimizu </Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/menublack.png")}
                style={styles.menu}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <Image
              source={require("../../assets/images/chef.png")}
              style={styles.profilepic}
            />
            <Text style={styles.username}>@akinashimizu</Text>
            <View style={styles.msgreqContainer}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/message.png")}
                  style={styles.msg}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/add.png")}
                  style={styles.req}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bio}>Hi I'm nova tara foodtrip tayo =)</Text>
          </View>
          <View style={styles.midContainer}>
            <View style={styles.line} />
            <View style={styles.midContainer1}>
              <View style={styles.leftMidContainer}>
                <Text style={styles.count}>40</Text>
                <View style={styles.leftLabelContainer}>
                  <Image
                    source={require("../../assets/images/follow.png")}
                    style={styles.follow}
                  />
                  <Text style={styles.label}>Following</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={{ width: 50, height: 50 }}
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
              </View>
              <View style={styles.rightMidContainer}>
                <Text style={styles.count}>20</Text>
                <View style={styles.rightLabelContainer}>
                  <Image
                    source={require("../../assets/images/foody.png")}
                    style={styles.foody}
                  />
                  <Text style={styles.label}>Foody</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../../assets/images/chef2.png")}
                    style={{ width: 50, height: 50 }}
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
              </View>
            </View>
            <View style={styles.line} />
            <View style={styles.postallContainer}>
              <Text style={styles.daily}>Daily Post</Text>
              <Text style={styles.daily}>View All</Text>
            </View>
            <View style={styles.messageContainer}>
              <View style={styles.leftMessageContainer}>
                <Image
                  source={require("../../assets/images/chef.png")}
                  style={styles.secondProfilepic}
                />
                <Text style={styles.message}>
                  Gusto ko na ng mang inasal pls
                </Text>
              </View>
              <Image
                source={require("../../assets/images/arrowleft.png")}
                style={styles.arrowLeft}
              />
            </View>
            <Text style={styles.reply}>reply</Text>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.foodImagesContainer}>
              <Image
                source={require("../../assets/images/food1.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food2.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food3.jpg")}
                style={styles.foodImages}
              />
            </View>
            <View style={styles.foodImagesContainer}>
              <Image
                source={require("../../assets/images/food4.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food5.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food6.jpg")}
                style={styles.foodImages}
              />
            </View>
            <View style={styles.foodImagesContainer}>
              <Image
                source={require("../../assets/images/food1.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food2.jpg")}
                style={styles.foodImages}
              />
              <Image
                source={require("../../assets/images/food3.jpg")}
                style={styles.foodImages}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default profilepage;

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   ScrollView,
//   Dimensions,
// } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import MapView, { Polyline, Marker } from "react-native-maps";

// const { width } = Dimensions.get("window");

// const profilepage = (props) => {
//   const { isVisible, onBackdropPress } = props;
//   const Sm = {
//     latitude: 14.30085,
//     longitude: 120.95648,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   const Hall = {
//     latitude: 14.283322,
//     longitude: 120.9599,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   };

//   const [mapWidth, setMapWidth] = useState("99%");
//   function updateMapStyling() {
//     setMapWidth("100%");
//   }

//   const [swipedUp, setSwipedUp] = useState(false);

//   function onSwipeUp() {
//     setSwipedUp(true);
//   }
//   return (
//     <View style={styles.topContainer}>
//       <MapView
//         showUserLocation={true}
//         showsMyLocationButton={true}
//         initialRegion={{
//           latitude: 14.30085,
//           longitude: 120.95648,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         // region={state.region}
//         style={{
//           flex: 1,
//           width: mapWidth,
//         }}
//         onMapReady={() => {
//           updateMapStyling();
//         }}
//       >
//         <Marker coordinate={{ latitude: 14.30085, longitude: 120.95648 }} />
//         <Polyline coordinates={[Sm, Hall]} strokeWidth={2} />
//         <Marker coordinate={{ latitude: 14.283322, longitude: 120.9599 }} />
//       </MapView>
//       <TouchableOpacity onPress={onSwipeUp} activeOpacity={1}>
//         <View style={swipedUp ? { height: 400 } : styles.view}>
//           <ScrollView style={{ backgroundColor: "red" }}>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>

//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>

//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//             <Text>sjkdh</Text>
//           </ScrollView>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default profilepage;

// // const styles = StyleSheet.create({})
// const styles = StyleSheet.create({
//   modalContainer: {
//     margin: 0,
//     justifyContent: "flex-end",
//     shadowColor: "rgba(0, 0, 0, 0.3)",
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowRadius: 40,
//     shadowOpacity: 1,
//     elevation: 5,
//   },
//   view: {
//     maxHeight: 100,
//   },
//   topContainer: {
//     height: "100%",
//     backgroundColor: "white",
//   },
//   bar: {
//     backgroundColor: "gray",
//     height: 15,
//     alignSelf: "center",
//     borderRadius: 20,
//     width: width / 3.5,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   line: {
//     width: width / 4,
//     height: 15,
//     alignSelf: "center",
//     marginTop: 7,
//   },
// });
