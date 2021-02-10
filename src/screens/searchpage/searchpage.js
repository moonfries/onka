import React, { useState } from "react";
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

const { width } = Dimensions.get("window");

const SearchPage = (props) => {
  const { navigation } = props;
  const [selectedTab, setSelectedTab] = useState("chef");

  const handleTabSelect = (value) => {
    setSelectedTab(value);
  };

  // renderTabContent = (selectedTab) => {
  //   switch (selectedTab) {
  //     case 0:
  //       return <ChefTab />;
  //     case 1:
  //       return <FoodTab />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.header}>
            <View style={styles.topComponents}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require("../../assets/images/whitearrow.png")}
                  style={styles.back}
                />
                {/* <Icon style={styles.back} name="chevron-back-outline" /> */}
              </TouchableOpacity>
              <TouchableOpacity style={styles.filter}>
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
              {/* <AntDesign
                name="gift"
                size={24}
                color="black"
                style={styles.basket}
              /> */}
            </View>
            <Tab selectedTab={selectedTab} handleTabSelect={handleTabSelect} />
          </View>

          {/* <View>{this.renderTabContent(selectedTab)}</View> */}
          {selectedTab === "chef" ? (
            <ChefTab navigation={navigation} />
          ) : (
            <FoodTab />
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#ef6250",
    height: 214,
  },
  topComponents: {
    marginTop: 70,
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
