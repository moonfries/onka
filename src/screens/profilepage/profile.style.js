import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: "#DEE1E6",
  },
  container: {
    height: "100%",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backarrow: {
    width: 25,
    height: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3a404c",
  },
  menu: {
    width: 17,
    height: 17,
  },
  top: {
    alignSelf: "center",
    alignItems: "center",
  },
  profilepic: {
    width: 130,
    height: 130,
    marginTop: 20,
  },
  username: {
    fontSize: 16,
    color: "#3a404c",
    fontWeight: "bold",
    marginTop: 10,
  },
  msgreqContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  msg: {
    width: 80,
    height: 33,
  },
  req: {
    width: 80,
    height: 33,
  },
  bio: {
    fontSize: 16,
    color: "#3a404c",
    marginTop: 15,
  },
  midContainer: {
    height: "40%",
    alignSelf: "center",
  },
  midContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    marginTop: 30,
    borderWidth: 0.5,
    width: width / 1.1,
    borderColor: "lightgray",
  },
  leftMidContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: width / 2.3,
  },
  rightMidContainer: {
    alignSelf: "center",
    marginTop: 20,
    width: width / 2.3,
  },
  count: {
    fontSize: 14,
    color: "#3a404c",
    alignSelf: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3a404c",
    marginLeft: 10,
  },
  leftLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  follow: {
    width: 20,
    height: 20,
  },
  rightLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,
  },
  foody: {
    width: 14,
    height: 14,
  },
  imageContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  images: {
    marginLeft: -30,
    width: 50,
    height: 50,
  },
  postallContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  daily: {
    fontSize: 12,
    color: "#3a404c",
  },
  secondProfilepic: {
    width: 30,
    height: 30,
  },
  message: {
    fontSize: 14,
    color: "#3a404c",
    marginLeft: 10,
  },
  arrowLeft: {
    width: 12,
    height: 12,
  },
  messageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  leftMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reply: {
    color: "#777e84",
    fontSize: 11,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-end",
  },
  foodImages: {
    height: 182,
    borderRadius: 20,
    width: width / 3.3,
  },
  bottomContainer: {
    marginTop: -180,
    marginBottom: 390,
    height: 400,
    backgroundColor: "#e9ecef",
  },
  foodImagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
};

export default styles;
