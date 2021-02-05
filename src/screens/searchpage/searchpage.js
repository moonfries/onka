import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Icon } from "native-base";

const { width } = Dimensions.get("window");

const SearchPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: "#ef6250", height: 200 }}>
          <View
            style={{
              marginTop: 70,
              flexDirection: "row",
              // alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Icon style={styles.back} name="chevron-back-outline" />
            <TouchableOpacity style={styles.filter}>
              <Icon style={styles.filterIcon} name="water-outline" />
            </TouchableOpacity>
            <Icon style={styles.back} name="chevron-back-outline" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  back: {
    color: "white",
  },
  filter: {
    backgroundColor: "#fff",
    width: width / 2,
  },
  filterIcon: {
    color: "black",
    alignSelf: "flex-end",
    marginRight: 10,
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
