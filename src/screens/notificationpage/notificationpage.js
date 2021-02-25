import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import NotificationHeader from "../../components/NotificationHeader";
import { AntDesign } from "@expo/vector-icons";
import { List } from "native-base";
import styles from "./notification.style";

const notifications = [
  {
    id: "1",
    image: require("../../assets/images/chef2.png"),
    name: "Shara Santos",
    datetime: "8 Jan at 2:05pm",
    message: "Mentioned you in a comment.",
  },
  {
    id: "2",
    image: require("../../assets/images/chef3.png"),
    name: "Trish Ramirez",
    datetime: "9 Jan at 11:05pm",
    message: "Mentioned you in a comment.",
  },
];

const notificationpage = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View>
          <NotificationHeader navigation={navigation} />
          <List>
            <List
              showsVerticalScrollIndicator={false}
              dataArray={notifications}
              vertical={true}
              style={styles.listBody}
              keyExtractor={(notifications) => notifications.id}
              renderRow={(notification) => (
                <View style={styles.body}>
                  <View style={styles.imageContainer}>
                    <Image source={notification.image} style={styles.image} />
                  </View>
                  <View style={styles.space}>
                    <View style={styles.rightContainer}>
                      <Text style={styles.name}>{notification.name}</Text>
                      <Text style={styles.date}>{notification.datetime}</Text>
                    </View>
                    <Text style={styles.message}>{notification.message}</Text>
                  </View>
                </View>
              )}
            />
          </List>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default notificationpage;
