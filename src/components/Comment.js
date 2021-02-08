import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CommentModal from "./CommentModal";

const Comment = () => {
  const [modalBid, setModalBid] = useState(false);
  return (
    <View style={styles.iconName}>
      <TouchableOpacity
        onPress={() => {
          setModalBid(!modalBid);
        }}
        style={styles.commentContainer}
      >
        <Image
          source={require("../assets/images/comments.png")}
          style={styles.commentIcon}
        />
        <Text style={styles.subText}>152</Text>
      </TouchableOpacity>

      <CommentModal
        isVisible={modalBid}
        onDismiss={() => {
          setModalBid(!modalBid);
        }}
      />
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  iconName: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 25,
  },
  commentIcon: {
    width: 20,
    height: 20,
  },
  subText: {
    fontSize: 12,
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
