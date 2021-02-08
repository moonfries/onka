import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
  },
  body: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  touchIcons: {
    width: 20,
  },
  touchIcons1: {
    width: 15,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginBottom: -5,
  },
  inboxmessageIcon: {
    width: 20,
    height: 20,
  },
  notificationsIcon: {
    width: 18,
    height: 18,
    marginBottom: -2,
  },
  menuIcon: {
    width: 15,
    height: 15,
    marginBottom: -2,
  },
  secondContainer: {
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 10,
  },
  infoContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  featuredImage: {
    width: 55,
    height: 34,
    marginBottom: -5,
  },
  foodName: {
    color: "#fab005",
    fontSize: 20,
    fontWeight: "bold",
  },
  infoContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  info: {
    width: "70%",
  },
  infoText: {
    color: "white",
    fontSize: 14,
  },
  ribbonwhite: {
    width: 22,
    height: 26,
  },
  thirdContainer: {
    marginBottom: 10,
  },
  chatOrderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 55,
    height: 55,
    borderRadius: 27,
    borderWidth: 3,
    borderColor: "white",
  },
  followIcon: {
    width: 16,
    height: 16,
    marginRight: -10,
    zIndex: 1,
  },
  nameContainer: {
    marginLeft: 10,
  },
  nameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  ordernowIcon: {
    width: 80,
    height: 43,
  },
};

export default styles;
