import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Icon, List } from "native-base";
import { Entypo, AntDesign } from "@expo/vector-icons";
import styles from "./chat.style";

const messages = [
  {
    id: "1",
    chat: "Hi inquire po sa menu ninyo? hm?",
    datetime: "8 Jan at 2:05pm",
  },
  {
    id: "2",
    chat: "Hi inquire po sa menu ninyo? hm?",
    datetime: "8 Jan at 2:05pm",
  },
  {
    id: "3",
    chat: "Hi inquire po sa menu ninyo? hm?",
    datetime: "8 Jan at 2:05pm",
  },
];

const recievedTexts = [
  {
    id: "1",
    chat: "Hi thanks po sa inquire",
    datetime: "8 Jan at 2:20pm",
  },
  {
    id: "2",
    chat: "Hi thanks po sa inquire",
    datetime: "8 Jan at 2:20pm",
  },
];

const chatpage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <View style={styles.mainContainer}>
          <View>
            <View style={styles.header}>
              <View style={styles.leftHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <AntDesign name="left" size={24} />
                  {/* <Icon style={styles.controlsLeft} name="chevron-back-outline" /> */}
                </TouchableOpacity>

                <Text style={styles.name}>Chef Bea</Text>
              </View>
              <Entypo name="dots-three-vertical" size={20} color="black" />
            </View>
            <List>
              <List
                showsVerticalScrollIndicator={false}
                dataArray={messages}
                vertical={true}
                style={styles.listBody}
                keyExtractor={(messages) => messages.id}
                renderRow={(message) => (
                  <View>
                    <View style={styles.chatContainer}>
                      <Text style={styles.chatText}>{message.chat}</Text>
                      <Text style={styles.chatDate}>{message.datetime}</Text>
                    </View>
                  </View>
                )}
              />
            </List>
            <List>
              <List
                showsVerticalScrollIndicator={false}
                dataArray={recievedTexts}
                vertical={true}
                style={styles.listBody1}
                keyExtractor={(recievedTexts) => recievedTexts.id}
                renderRow={(recievedText) => (
                  <View
                    style={styles.senderContainer}
                  >
                    <Image
                      style={styles.dp}
                      source={require("../../assets/images/chef.png")}
                    />
                    <View style={styles.recievedChatContainer}>
                      <Text style={styles.recievedChatText}>
                        {recievedText.chat}
                      </Text>
                      {/* <Text style={styles.chatDate}>
                        {recievedText.datetime}
                      </Text> */}
                    </View>
                  </View>
                )}
              />
            </List>
          </View>
          <View>
            <TextInput placeholder="Type here" style={styles.type} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default chatpage;
