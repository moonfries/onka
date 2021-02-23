import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
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
    marginTop: 20,
  },
  banner: {
    height: 194,
    width: "100%",
  },
  rightContainer: {
    marginLeft: 10,
  },
  rightTopContainer: {
    flexDirection: "row",
    width: "70.5%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 25,
  },
  imageContainer: {
    marginTop: -40,
    marginLeft: 20,
    marginRight: 20,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  profilepic: {
    height: 90,
    width: 90,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 50,
  },
  starContainer: {
    flexDirection: "row",
  },
  star: {
    height: 11,
    width: 11,
  },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    height: 10,
    width: 10,
  },
  reviewCounts: {
    marginLeft: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },
  msg: {
    height: 30,
    width: 75,
  },
  midContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  kmContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#343A40",
  },
  nearbymarker: {
    height: 16,
    width: 16,
  },
  kmText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#343A40",
  },
  locationText: {
    fontSize: 11,
    color: "#868E96",
  },
  bio: {
    marginTop: 10,
    fontSize: 14,
    color: "#343A40",
  },
  line: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#D8DBE3",
  },
  followers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  followersContainer: {
    alignItems: "center",
  },
  followersText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#868E96",
    marginTop: 5,
  },
  followersCount: {
    fontSize: 11,
    color: "#343A40",
  },
  imageContainer1: {
    flexDirection: "row",
    // alignSelf: "center",
    marginTop: 10,
  },
  images: {
    marginLeft: -25,
    width: 35,
    height: 35,
  },
};

export default styles;
