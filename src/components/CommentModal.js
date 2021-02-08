import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CommentModal = (props) => {
  const { isVisible, onBackdropPress } = props;
  return (
    <View>
      <Modal
        isVisible={isVisible}
        onBackdropPress={onBackdropPress}
        backdropOpacity={0.3}
        style={styles.modalContainer}
        swipeThreshold={200}
        onSwipeComplete={onBackdropPress}
        swipeDirection="down"
        hideModalContentWhileAnimating
        scrollHorizontal
        propagateSwipe
        useNativeDriver
        animationInTiming={350}
        animationOutTiming={350}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        scrollOffset={200}
      >
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={props.onDismiss}>
            <View style={styles.bar} />
          </TouchableOpacity>
          <View style={styles.mainContainer}>
            <View style={styles.semiContainer}>
              <View style={styles.body}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/chef2.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.space}>
                  <View style={styles.rightContainer}>
                    <View style={styles.comment}>
                      <Text style={styles.name}>
                        Shara Santos{" "}
                        <Text style={styles.commentText}>
                          Sobrang sarap ng bulalo nag order kami para sa dinner
                          kahapon grabe sabaw pa lang ulam na
                        </Text>
                      </Text>
                    </View>
                    <Text style={styles.date}>8 Jan at 2:05 pm</Text>
                  </View>
                </View>
              </View>

              <View style={styles.body}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/chef2.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.space}>
                  <View style={styles.rightContainer}>
                    <View style={styles.comment}>
                      <Text style={styles.name}>
                        Shara Santos{" "}
                        <Text style={styles.commentText}>
                          Sobrang sarap ng bulalo nag order kami para sa dinner
                          kahapon grabe sabaw pa lang ulam na
                        </Text>
                      </Text>
                    </View>
                    <Text style={styles.date}>8 Jan at 2:05 pm</Text>
                  </View>
                  <View style={styles.replyContainer}>
                    <Text style={styles.replyText}>1 reply</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bodyReply}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/chef.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.space}>
                  <View style={styles.replyRightContainer}>
                    <View style={styles.comment}>
                      <Text style={styles.name}>
                        Trish Ramirez{" "}
                        <Text style={styles.commentText}>
                          Tender nung meat at ang mura pa kaya order na kayo.
                        </Text>
                      </Text>
                      <AntDesign name="up" size={20} color="black" />
                    </View>
                    <Text style={styles.date}>8 Jan at 4:05 pm</Text>
                  </View>
                </View>
              </View>

              <View
                style={[styles.bodyReply, { marginTop: -20, paddingLeft: 30 }]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/chef2.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.space}>
                  <View style={styles.replyRightContainer1}>
                    <View style={styles.comment}>
                      <Text style={styles.name}>
                        Shara Santos{" "}
                        <Text style={styles.commentText}>
                          Kaya nga sobrang sulit at marami pang sabaw
                        </Text>
                      </Text>
                    </View>
                    <Text style={styles.date}>8 Jan at 4:05 pm</Text>
                  </View>
                </View>
              </View>

              <View
                style={[styles.bodyReply, { marginTop: -10, paddingLeft: 30 }]}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/images/chef.png")}
                    style={styles.image}
                  />
                </View>
                <View style={styles.space}>
                  <View style={styles.replyRightContainer1}>
                    <View style={styles.comment}>
                      <Text style={styles.name}>
                        Trish Ramirez{" "}
                        <Text style={styles.commentText}>
                          Tama agree ako dyan
                        </Text>
                      </Text>
                    </View>
                    <Text style={styles.date}>8 Jan at 4:20 pm</Text>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <TextInput
                placeholderTextColor="black"
                placeholder="Add Comment"
                style={styles.textInput}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: "flex-end",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 40,
    shadowOpacity: 1,
    elevation: 5,
  },
  topContainer: {
    height: "90%",
    backgroundColor: "white",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  bar: {
    backgroundColor: "gray",
    height: 15,
    alignSelf: "center",
    borderRadius: 20,
    width: width / 3.5,
    marginTop: 10,
    marginBottom: 10,
  },
  semiContainer: {
    marginTop: 10,
  },
  body: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 120,
    backgroundColor: "lightgray",
    marginBottom: 1,
  },
  bodyReply: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 100,
    backgroundColor: "lightgray",
  },
  mainContainer: {
    justifyContent: "space-between",
    height: "100%",
  },
  imageContainer: {
    marginLeft: 30,
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  space: {
    marginLeft: 10,
  },
  rightContainer: {
    marginTop: 15,
    width: width / 1.45,
  },
  replyRightContainer: {
    marginTop: 15,
    width: width / 1.6,
  },
  replyRightContainer1: {
    marginTop: 15,
    width: width / 1.8,
  },
  comment: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  commentText: {
    fontSize: 14,
    fontWeight: "normal",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "gray",
    fontSize: 12,
  },
  replyContainer: {
    width: width / 6,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  replyText: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  textInput: {
    borderRadius: 16,
    alignSelf: "center",
    width: width / 1.03,
    color: "black",
    backgroundColor: "lightgray",
    height: 50,
    marginBottom: 50,
    paddingLeft: 10,
  },
});
