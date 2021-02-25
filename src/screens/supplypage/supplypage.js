import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FirstMenu from "./firstmenu";
import SecondMenu from "./secondmenu";
// import ThirdMenu from "./thirdmenu";

import Swiper from "react-native-swiper";

const supplypage = (props) => {
  const { navigation } = props;
  return (
    <Swiper horizontal={false} showsPagination={false} showsButtons={false}>
      <View>
        <FirstMenu navigation={navigation} />
      </View>
      <View>
        <SecondMenu navigation={navigation} />
      </View>
      {/* <View>
        <ThirdMenu navigation={navigation} />
      </View> */}
    </Swiper>
  );
};

export default supplypage;
