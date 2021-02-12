import React, { PureComponent } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { scale, verticalScale } from "../utils/scale";

import ChefTab from "./ChefTab";
import FoodTab from "./FoodTab";
import RestaurantTab from "./RestaurantTab";
import CoffeeTab from "./CoffeeTab";

const { width } = Dimensions.get("window");

class Tab extends PureComponent {
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

    return (
      <View style={styles.tab}>
        <View
          style={[
            styles.iconContainer,
            // selectedTab === "chef" && { marginTop: -11.5 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedTab: 0 });
            }}
          >
            <Image
              source={require("../assets/images/chef_.png")}
              style={[
                styles.image,
                // selectedTab === "chef" && { width: 65, height: 65 },
              ]}
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 12 }}>Chef</Text>
        </View>

        <View
          style={[
            styles.iconContainer1,
            // selectedTab === "food" && { marginTop: -11.5 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedTab: 1 });
            }}
          >
            <Image
              source={require("../assets/images/food.png")}
              style={[
                styles.image,
                // selectedTab === "food" && { width: 65, height: 65 },
              ]}
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 12 }}>Food</Text>
        </View>
        <View
          style={[
            styles.iconContainer1,
            // selectedTab === "restaurants" && { marginTop: -11.5 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedTab: 2 });
            }}
          >
            <Image
              source={require("../assets/images/restaurants.png")}
              style={[
                styles.image,
                // selectedTab === "restaurants" && { width: 65, height: 65 },
              ]}
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 12 }}>Restaurants</Text>
        </View>
        <View
          style={[
            styles.iconContainer1,
            // selectedTab === "coffee" && { marginTop: -11.5 },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedTab: 3 });
            }}
          >
            <Image
              source={require("../assets/images/coffee.png")}
              style={[
                styles.image,
                // selectedTab === "coffee" && { width: 65, height: 65 },
              ]}
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 12 }}>Coffee</Text>
        </View>
        <View style={{ marginTop: 200 }}>
          {this.renderTabContent(selectedTab)}
        </View>
      </View>
    );
  }
}

export default Tab;
// const Tab = (props) => {
//   const { selectedTab, handleTabSelect } = props;

//   return (
//     <View style={styles.tab}>
//       <View
//         style={[
//           styles.iconContainer,
//           selectedTab === "chef" && { marginTop: -11.5 },
//         ]}
//       >
//         <TouchableOpacity onPress={() => handleTabSelect("chef")}>
//           <Image
//             source={require("../assets/images/chef_.png")}
//             style={[
//               styles.image,
//               selectedTab === "chef" && { width: 65, height: 65 },
//             ]}
//           />
//         </TouchableOpacity>
//         <Text style={{ color: "#fff", fontSize: 12 }}>Chef</Text>
//       </View>

//       <View
//         style={[
//           styles.iconContainer1,
//           selectedTab === "food" && { marginTop: -11.5 },
//         ]}
//       >
//         <TouchableOpacity onPress={() => handleTabSelect("food")}>
//           <Image
//             source={require("../assets/images/food.png")}
//             style={[
//               styles.image,
//               selectedTab === "food" && { width: 65, height: 65 },
//             ]}
//           />
//         </TouchableOpacity>
//         <Text style={{ color: "#fff", fontSize: 12 }}>Food</Text>
//       </View>
//       <View
//         style={[
//           styles.iconContainer1,
//           selectedTab === "restaurants" && { marginTop: -11.5 },
//         ]}
//       >
//         <TouchableOpacity onPress={() => handleTabSelect("restaurants")}>
//           <Image
//             source={require("../assets/images/restaurants.png")}
//             style={[
//               styles.image,
//               selectedTab === "restaurants" && { width: 65, height: 65 },
//             ]}
//           />
//         </TouchableOpacity>
//         <Text style={{ color: "#fff", fontSize: 12 }}>Restaurants</Text>
//       </View>
//       <View
//         style={[
//           styles.iconContainer1,
//           selectedTab === "coffee" && { marginTop: -11.5 },
//         ]}
//       >
//         <TouchableOpacity onPress={() => handleTabSelect("coffee")}>
//           <Image
//             source={require("../assets/images/coffee.png")}
//             style={[
//               styles.image,
//               selectedTab === "coffee" && { width: 65, height: 65 },
//             ]}
//           />
//         </TouchableOpacity>
//         <Text style={{ color: "#fff", fontSize: 12 }}>Coffee</Text>
//       </View>
//     </View>
//   );
// };
// export default Tab;

const styles = StyleSheet.create({
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
