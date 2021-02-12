import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Touchable,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Tab from "../../components/Tab";
import ChefTab from "../../components/ChefTab";
import FoodTab from "../../components/FoodTab";
import RestaurantTab from "../../components/RestaurantTab";
import CoffeeTab from "../../components/CoffeeTab";
import Filter from "../filterpage/filterpage";

const { width } = Dimensions.get("window");

class Search extends PureComponent {
  state = {
    selectedTab: 0,
  };

  renderTabContent = (selected) => {
    switch (selected) {
      case 0:
        return <ChefTab />;
      case 1:
        return <FoodTab />;
      case 2:
        return <RestaurantTab />;
      case 3:
        return <CoffeeTab />;
      default:
        return null;
    }
  };

  render() {
    const { selectedTab } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View>
          {/* <ScrollView style={{ height: "100%" }}> */}
          <View style={styles.header}>
            <View style={styles.topComponents}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("../../assets/images/whitearrow.png")}
                  style={styles.back}
                />
                {/* <Icon style={styles.back} name="chevron-back-outline" /> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Filter")}
                style={styles.filter}
              >
                <Image
                  source={require("../../assets/images/filter.png")}
                  style={styles.filterImage}
                />
                {/* <AntDesign
                  name="filter"
                  size={20}
                  color="black"
                  style={styles.filterIcon}
                /> */}
              </TouchableOpacity>
              <Image
                source={require("../../assets/images/basket.png")}
                style={styles.basketImage}
              />
            </View>
            <View style={styles.tab}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    marginTop: selectedTab === 0 ? -5 : 0,
                  },
                  // selectedTab === "chef" && { marginTop: -11.5 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 0 });
                  }}
                >
                  <Image
                    source={require("../../assets/images/chef_.png")}
                    style={[
                      styles.image,
                      {
                        width: selectedTab === 0 ? 58 : 53,
                        height: selectedTab === 0 ? 58 : 53,
                      },
                      // selectedTab === "chef" && { width: 65, height: 65 },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 12 }}>Chef</Text>
              </View>

              <View
                style={[
                  styles.iconContainer1,
                  {
                    marginTop: selectedTab === 1 ? -5 : 0,
                  },
                  // selectedTab === "food" && { marginTop: -11.5 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 1 });
                  }}
                >
                  <Image
                    source={require("../../assets/images/food.png")}
                    style={[
                      styles.image,
                      {
                        width: selectedTab === 1 ? 58 : 53,
                        height: selectedTab === 1 ? 58 : 53,
                      },
                      // selectedTab === "food" && { width: 65, height: 65 },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 12 }}>Food</Text>
              </View>
              <View
                style={[
                  styles.iconContainer1,
                  {
                    marginTop: selectedTab === 2 ? -5 : 0,
                  },
                  // selectedTab === "restaurants" && { marginTop: -11.5 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 2 });
                  }}
                >
                  <Image
                    source={require("../../assets/images/restaurants.png")}
                    style={[
                      styles.image,
                      {
                        width: selectedTab === 2 ? 58 : 53,
                        height: selectedTab === 2 ? 58 : 53,
                      },
                      // selectedTab === "restaurants" && { width: 65, height: 65 },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 12 }}>Restaurants</Text>
              </View>
              <View
                style={[
                  styles.iconContainer1,
                  {
                    marginTop: selectedTab === 3 ? -5 : 0,
                  },
                  // selectedTab === "coffee" && { marginTop: -11.5 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 3 });
                  }}
                >
                  <Image
                    source={require("../../assets/images/coffee.png")}
                    style={[
                      styles.image,
                      {
                        width: selectedTab === 3 ? 58 : 53,
                        height: selectedTab === 3 ? 58 : 53,
                      },
                      // selectedTab === "coffee" && { width: 65, height: 65 },
                    ]}
                  />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 12 }}>Coffee</Text>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={{ marginBottom: 210 }}>
              {this.renderTabContent(selectedTab)}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Search;

// const SearchPage = (props) => {
//   const { navigation } = props;
//   const [selectedTab, setSelectedTab] = useState("chef");

//   const handleTabSelect = (value) => {
//     setSelectedTab(value);
//   };

//   // renderTabContent = (selectedTab) => {
//   //   switch (selectedTab) {
//   //     case 0:
//   //       return <ChefTab />;
//   //     case 1:
//   //       return <FoodTab />;
//   //     default:
//   //       return null;
//   //   }
//   // };

//   return (
//     <SafeAreaView style={styles.safeAreaView}>
//       <View>
//         {/* <ScrollView style={{ height: "100%" }}> */}
//         <View style={styles.header}>
//           <View style={styles.topComponents}>
//             <TouchableOpacity onPress={() => navigation.goBack()}>
//               <Image
//                 source={require("../../assets/images/whitearrow.png")}
//                 style={styles.back}
//               />
//               {/* <Icon style={styles.back} name="chevron-back-outline" /> */}
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Filter")}
//               style={styles.filter}
//             >
//               <Image
//                 source={require("../../assets/images/filter.png")}
//                 style={styles.filterImage}
//               />
//               {/* <AntDesign
//                   name="filter"
//                   size={20}
//                   color="black"
//                   style={styles.filterIcon}
//                 /> */}
//             </TouchableOpacity>
//             <Image
//               source={require("../../assets/images/basket.png")}
//               style={styles.basketImage}
//             />
//             {/* <AntDesign
//                 name="gift"
//                 size={24}
//                 color="black"
//                 style={styles.basket}
//               /> */}
//           </View>
//           <Tab />
//           {/* <Tab selectedTab={selectedTab} handleTabSelect={handleTabSelect} /> */}
//         </View>

//         {/* <View>{this.renderTabContent(selectedTab)}</View> */}
//         {/* </ScrollView> */}
//       </View>
//       {/* {selectedTab === "chef" ? (
//         <ChefTab navigation={navigation} />
//       ) : (
//         <FoodTab />
//       )} */}
//     </SafeAreaView>
//   );
// };

// export default SearchPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#ef6250",
    height: 214,
  },
  topComponents: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  back: {
    width: 23,
    height: 23,
  },
  filter: {
    backgroundColor: "#fff",
    width: width / 1.58,
    height: 40,
    borderRadius: 9,
  },
  basketImage: {
    width: 21,
    height: 21,
  },
  filterImage: {
    width: 12,
    height: 14,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 15,
  },
  filterIcon: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  basket: {
    color: "#fff",
  },

  tab: {
    // height: 24,
    // backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    // padding: scale(6),
    // marginHorizontal: scale(17.5),
    // marginTop: verticalScale(17.5),
  },
  iconContainer: {
    alignItems: "center",
  },
  iconContainer1: {
    alignItems: "center",
    marginLeft: 5,
  },
  image: {
    width: 53,
    height: 53,
  },
  // background: {
  //   height: 23,
  //   // width: scale(164),
  //   flex: 1,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   borderRadius: 4,
  // },
  text: {
    width: "100%",
    textAlignVertical: "center",
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   FlatList,
//   Image,
//   SafeAreaView,
//   TouchableOpacity,
//   Touchable,
// } from "react-native";

// const listTab = [
//   {
//     status: "All",
//   },
//   {
//     status: "Purple",
//   },
//   {
//     status: "Green",
//   },
// ];

// const searchpage = () => {
//   const [status, setStatus] = useState("All");
//   const setStatusFilter = (status) => setStatus(status);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.listTab}>
//         {listTab.map((e) => (
//           <TouchableOpacity
//             style={[styles.btnTab, status === e.status && styles.btnTabActive]}
//             onPress={() => setStatusFilter(e.status)}
//           >
//             <Text
//               style={[
//                 styles.textTab,
//                 status === e.status && styles.textTabActive,
//               ]}
//             >
//               {e.status}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* <FlatList
//         data={data}
//         keyExtractor={(e, i) => i.toString()}
//         renderItem={renderItem}
//       /> */}
//     </SafeAreaView>
//   );
// };

// export default searchpage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   listTab: {
//     alignSelf: "center",
//     marginBottom: 20,
//     flexDirection: "row",
//   },
//   btnTab: {
//     width: Dimensions.get("window").width / 3.5,
//     flexDirection: "row",
//     borderWidth: 0.5,
//     borderColor: "#ebebeb",
//     padding: 10,
//     justifyContent: "center",
//   },
//   textTab: {
//     color: "black",
//     fontSize: 16,
//   },
//   btnTabActive: {
//     backgroundColor: "#e683bd",
//   },
//   textTabActive: {
//     color: "#fff",
//   },
// });
