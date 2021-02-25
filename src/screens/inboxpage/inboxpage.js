import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import InboxHeader from "../../components/InboxHeader";
import { AntDesign } from "@expo/vector-icons";
import { List } from "native-base";
import styles from "./inbox.style";

const inboxpage = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View>
          <InboxHeader navigation={navigation} />

          <View style={styles.body}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/chef.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.rightContainer}>
                <Text style={styles.name}>Chef Trisha</Text>
                <Text style={styles.date}>2:40pm</Text>
              </View>
              <Text style={styles.message}>Hi Thanks po sa inquire</Text>
            </View>
          </View>
          <View style={styles.body1}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/chef2.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.rightContainer}>
                <Text style={styles.name}>Jenny Resto</Text>
                <Text style={styles.date1}>8 Jan at 2:05 pm</Text>
              </View>
              <Text style={styles.message1}>On the way na ang pinadala.</Text>
            </View>
          </View>
          <View style={styles.line1} />
          <View style={styles.body1}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/chef3.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.space}>
              <View style={styles.rightContainer}>
                <Text style={styles.name}>Centro</Text>
                <Text style={styles.date1}>8 Jan at 2:05 pm</Text>
              </View>
              <Text style={styles.message1}>
                Salamat sa pag order till next time
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default inboxpage;
