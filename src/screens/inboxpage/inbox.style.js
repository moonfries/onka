import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
    backgroundColor: "#DEE1E6",
  },
  listBody: {
    marginTop: 0,
    backgroundColor: "#ffffff",
  },
  body: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#fa5252",
  },
  body1: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    backgroundColor: "#495058",
  },
  imageContainer: {
    marginLeft: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 25,
  },
  space: {
    marginLeft: 10,
  },
  ordered: {
    marginLeft: 5,
    color: "#424242",
    fontSize: 14,
  },
  rightContainer: {
    flexDirection: "row",
    width: width / 1.45,
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  food: {
    marginLeft: 5,
    color: "#424242",
    fontWeight: "bold",
    fontSize: 14,
  },
  date: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 11,
  },
  date1: {
    color: "#ADB5BD",
    fontWeight: "bold",
    fontSize: 11,
  },
  line: {
    width: width / 4,
    height: 15,
    alignSelf: "center",
    marginTop: 7,
  },
  message: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  message1: {
    color: "#ffffff",
    fontSize: 14,
  },
  line1: {
    height: 0.2,
    width: "100%",
    color: "#596269",
  },
};

export default styles;
