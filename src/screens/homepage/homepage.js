import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MenuSupply from "../../components/MenuSupply";

export default function homepage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/beefsteak.jpg")}
        resizeMode="cover"
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View>
          <Image
            source={require("../../assets/images/gradienttop.png")}
            style={{ height: "40%" }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: -60,
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <TouchableOpacity style={{ width: 30 }}>
              <Image
                source={require("../../assets/images/search.png")}
                style={{ width: 18, height: 18 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 30 }}>
              <Image
                source={require("../../assets/images/inboxmessage.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <MenuSupply />
            <TouchableOpacity style={{ width: 30 }}>
              <Image
                source={require("../../assets/images/notifications.png")}
                style={{ width: 18, height: 18 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 30 }}>
              <Image
                source={require("../../assets/images/menu.png")}
                style={{ width: 15, height: 15 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 20,
          }}
        >
          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <TouchableOpacity style={{ width: 55 }}>
              <Image
                source={require("../../assets/images/featured.png")}
                style={{ width: 55, height: 34 }}
              />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Beef Steak
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text style={{ color: "white", fontSize: 14 }}>
                  It is compromised of thin slices of beef and union. Juicy and
                  Spicy
                </Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/ribbonwhite.png")}
                  style={{ width: 22, height: 26 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/chatnow.png")}
                style={{ width: 80, height: 43 }}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/images/beefsteak.jpg")}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 27,
                  borderWidth: 2,
                  borderColor: "white",
                }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 14 }}
                >
                  ChefBea12
                </Text>
                <AntDesign name="star" size={10} color="yellow" />
              </View>
            </View>
            <TouchableOpacity>
              <Image
                source={require("../../assets/images/ordernow.png")}
                style={{ width: 80, height: 43 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: -250, marginLeft: 30, marginRight: 30 }}>
          <View
            style={{
              // flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ width: 20 }}>
                <Image
                  source={require("../../assets/images/nearbymarker.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#cfcfcf", fontWeight: "bold" }}
              >
                0.5
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ width: 30 }}>
                <Image
                  source={require("../../assets/images/ordertrack.png")}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#cfcfcf", fontWeight: "bold" }}
              >
                42
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ width: 20 }}>
                <Image
                  source={require("../../assets/images/comments.png")}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#cfcfcf", fontWeight: "bold" }}
              >
                152
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ width: 20 }}>
                <Image
                  source={require("../../assets/images/sharefood.png")}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#cfcfcf", fontWeight: "bold" }}
              >
                {" "}
                4
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={{ width: 20 }}>
                <Image
                  source={require("../../assets/images/likeheart.png")}
                  style={{ width: 21, height: 21 }}
                />
              </TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#cfcfcf", fontWeight: "bold" }}
              >
                78
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Image
            source={require("../../assets/images/gradientbottom.png")}
            style={{
              height: "40%",
              width: "100%",
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// import React, { PureComponent } from "react";
// import {
//   View,
//   Text,
//   ImageBackground,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   Dimensions,
//   Platform,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
// // import MenuSupply from "../../components/MenuSupply";
// import Menu from "../../components/Menu";
// import Supply from "../../components/Supply";

// const { width } = Dimensions.get("window");

// class homepage extends PureComponent {
//   state = {
//     selectedTab: 0,
//   };

//   renderTabContent = (selected) => {
//     switch (selected) {
//       case 0:
//         return <Menu />;
//       case 1:
//         return <Supply />;
//       default:
//         return null;
//     }
//   };
//   render() {
//     const { selectedTab } = this.state;

//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <ImageBackground
//           source={require("../../assets/images/beefsteak.jpg")}
//           resizeMode="cover"
//           style={{
//             height: "100%",
//             width: "100%",
//           }}
//         >
//           <View>
//             <Image
//               source={require("../../assets/images/gradienttop.png")}
//               style={{ height: "40%" }}
//             />
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginTop: -60,
//                 justifyContent: "space-between",
//               }}
//             >
//               <TouchableOpacity style={{  width: 30 }}>
//                 <Image
//                   source={require("../../assets/images/search.png")}
//                   style={{ width: 30, height: 30 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ backgroundColor: "red", width: 30 }}>
//                 <Image
//                   source={require("../../assets/images/inboxmessage.png")}
//                   style={{ width: 30, height: 30 }}
//                 />
//               </TouchableOpacity>
//               <View style={styles.container}>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//                   <TouchableOpacity
//                     onPress={() => {
//                       this.setState({ selectedTab: 0 });
//                     }}
//                     style={[styles.buttons, { marginLeft: 30 }]}
//                   >
//                     <View
//                       style={[
//                         styles.overlay,
//                         {
//                           backgroundColor:
//                             selectedTab === 0 ? "transparent" : 0,
//                           borderWidth: selectedTab === 0 ? 1 : 0,
//                           // opacity: selectedTab === 0 ? 1 : 0.6,
//                           height: selectedTab === 0 ? 42 : 40,
//                         },
//                       ]}
//                     >
//                       <Text
//                         style={[
//                           styles.buttonText,
//                           {
//                             // marginRight: Platform.OS === "android" ? 10 : 20,
//                             fontSize: selectedTab === 0 ? 16 : 16,
//                           },
//                         ]}
//                       >
//                         Menu
//                       </Text>
//                     </View>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     onPress={() => this.setState({ selectedTab: 1 })}
//                     style={styles.buttons}
//                   >
//                     <View
//                       style={[
//                         styles.overlay,
//                         {
//                           backgroundColor:
//                             selectedTab === 1 ? "transparent" : 0,
//                           borderWidth: selectedTab === 1 ? 1 : 0,
//                           // opacity: selectedTab === 1 ? 1 : 0.6,
//                           height: selectedTab === 1 ? 42 : 40,
//                         },
//                       ]}
//                     >
//                       <Text
//                         fontWeight="bold"
//                         color="#fff"
//                         style={[
//                           styles.buttonText,
//                           {
//                             // marginRight: Platform.OS === "android" ? 25 : 15,
//                             fontSize: selectedTab === 1 ? 16 : 16,
//                           },
//                         ]}
//                       >
//                         Supply
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </ScrollView>
//                 <View>{this.renderTabContent(selectedTab)}</View>
//               </View>
//               <TouchableOpacity style={{ backgroundColor: "red", width: 30 }}>
//                 <Image
//                   source={require("../../assets/images/notifications.png")}
//                   style={{ width: 30, height: 30 }}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ backgroundColor: "red", width: 30 }}>
//                 <Image
//                   source={require("../../assets/images/menu.png")}
//                   style={{ width: 30, height: 30 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ImageBackground>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     backgroundColor: "green",
//   },
//   overlay: {
//     // borderWidth: 1,
//     borderColor: "#fff",
//     flexDirection: "row",
//     height: 40,
//     width: width / 5,
//     borderRadius: 10,
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   // buttonStyle: {
//   //   width: width / 4.5,
//   //   borderWidth: 1,
//   //   borderColor: "red",
//   //   borderRadius: 10,
//   //   justifyContent: "center",
//   //   marginRight: 10,
//   // },
//   textStyle: {
//     alignSelf: "center",
//     fontWeight: "bold",
//     fontSize: 7,
//     color: "#fff",
//     ...Platform.select({
//       ios: {
//         marginTop: 5,
//       },
//     }),
//   },
//   icons: {
//     width: 20,
//     height: 15,
//     marginLeft: 10,
//   },
//   buttonText: {
//     marginLeft: 15,
//     color: "white",
//   },
//   buttons: {
//     marginRight: 10,
//   },
// });

// export default homepage;
