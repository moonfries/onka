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
import PizzaTab from "../../components/PizzaTab";
import MilkteaTab from "../../components/MilkteaTab";
import Filter from "../filterpage/filterpage";

const { width } = Dimensions.get("window");

class Search extends PureComponent {
  state = {
    selectedTab: 0,
  };

  renderTabContent = (selected) => {
    const { navigation } = this.props;
    switch (selected) {
      case 0:
        return <ChefTab navigation={navigation} />;
      case 1:
        return <FoodTab />;
      case 2:
        return <RestaurantTab />;
      case 3:
        return <CoffeeTab />;
      case 4:
        return <MilkteaTab />;
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
              <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
                <Image
                  source={require("../../assets/images/basketsupply.png")}
                  style={styles.basketImage}
                />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal>
              <View style={styles.tab}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 0 });
                  }}
                >
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          selectedTab === 0 ? "#fab005" : "#f87766",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/chefIcon.png")}
                      style={styles.chefImage}
                    />
                    <Text
                      style={[
                        styles.label,
                        { fontWeight: selectedTab === 0 ? "bold" : "normal" },
                      ]}
                    >
                      Chef
                    </Text>
                  </View>
                </TouchableOpacity>
                {/* <View
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
                  <Text
                    style={[
                      styles.label,
                      { fontWeight: selectedTab === 0 ? "bold" : "normal" },
                    ]}
                  >
                    Chef
                  </Text>
                </View> */}

                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 1 });
                  }}
                >
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          selectedTab === 1 ? "#fab005" : "#f87766",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/foodIcon.png")}
                      style={styles.chefImage}
                    />
                    <Text
                      style={[
                        styles.label,
                        { fontWeight: selectedTab === 1 ? "bold" : "normal" },
                      ]}
                    >
                      Food
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 2 });
                  }}
                >
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          selectedTab === 2 ? "#fab005" : "#f87766",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/restoIcon.png")}
                      style={styles.restoImage}
                    />
                    <Text
                      style={[
                        styles.label,
                        { fontWeight: selectedTab === 2 ? "bold" : "normal" },
                      ]}
                    >
                      Resto
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 3 });
                  }}
                >
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          selectedTab === 3 ? "#fab005" : "#f87766",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/coffeeIcon.png")}
                      style={styles.chefImage}
                    />
                    <Text
                      style={[
                        styles.label,
                        { fontWeight: selectedTab === 3 ? "bold" : "normal" },
                      ]}
                    >
                      Coffee
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.setState({ selectedTab: 4 });
                  }}
                >
                  <View
                    style={[
                      styles.iconContainer,
                      {
                        backgroundColor:
                          selectedTab === 4 ? "#fab005" : "#f87766",
                      },
                    ]}
                  >
                    <Image
                      source={require("../../assets/images/milkteaIcon.png")}
                      style={styles.milkteaImage}
                    />
                    <Text
                      style={[
                        styles.label,
                        { fontWeight: selectedTab === 4 ? "bold" : "normal" },
                      ]}
                    >
                      Milktea
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
  iconContainer: {
    width: 60,
    height: 78,
    borderRadius: 12,
    backgroundColor: "#fab005",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  chefImage: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: 5,
  },
  restoImage: {
    width: 37,
    height: 29,
    alignSelf: "center",
    marginTop: 5,
  },
  milkteaImage: {
    width: 22,
    height: 31,
    alignSelf: "center",
    marginTop: 5,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 10,
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
    alignItems: "center",
    marginLeft: 15,
    // marginLeft: 15,
    // marginRight: 15,
    // padding: scale(6),
    // marginHorizontal: scale(17.5),
    // marginTop: verticalScale(17.5),
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
