import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Icon } from "native-base";

const { width } = Dimensions.get("window");

const FilterHeader = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.topComponents}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/images/whitearrow.png")}
            style={styles.back}
          />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            color="black"
            placeholder="Chinese cuisine"
            placeholderTextColor="black"
            style={styles.filter}
          />
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.filterImage}
          />
        </View>
      </View>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.controlsLeft} name="chevron-back-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Filter")}
          style={styles.filter}
        >
          <View style={styles.filterContainer}>
            <Text style={styles.food}>Chefs</Text>
            <Image
              source={require("../assets/images/filter.png")}
              style={styles.filterImage}
            />
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default FilterHeader;

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: "#ef6250",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 9,
    width: width / 1.6,
    marginLeft: 20,
  },
  food: {
    color: "#fff",
  },
  controlsLeft: {
    fontSize: 40,
  },
  topComponents: {
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "85%",
    justifyContent: "flex-start",
  },
  back: {
    width: 23,
    height: 23,
  },
  filter: {
    paddingLeft: 10,
  },
  filterImage: {
    width: 12,
    height: 14,
    marginRight: 10,
    backgroundColor: "#fff",
  },
});
