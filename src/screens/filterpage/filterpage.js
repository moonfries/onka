import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Icon } from "native-base";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Header from "../../components/FilterHeader";
import FilterFoods from "../../components/FilterFoods";

const { width } = Dimensions.get("window");

const filterpage = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <FilterFoods />
    </SafeAreaView>
  );
};

export default filterpage;

const styles = StyleSheet.create({
  controlsLeft: {
    fontSize: 40,
  },
  filter: {
    backgroundColor: "#495058",
    width: width / 1.58,
    height: 40,
    borderRadius: 9,
    marginLeft: 25,
  },
  filterImage: {
    width: 12,
    height: 14,
    // alignSelf: "flex-end",
    // marginRight: 20,
    // marginTop: 15,
  },
});
