import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    backgroundColor: "#fa5252",
    height: "100%",
  },
  keyboard: {
    flex: 1,
    backgroundColor: "#00000000",
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  onkaLogo: {
    marginTop: -10,
    width: 130,
    height: 194,
  },
  motto: {
    marginTop: 15,
    color: "white",
    fontSize: 16,
  },
  switchSelector: {
    width: width / 1.63,
    marginTop: 40,
  },
  fieldContainer: {
    // width: 222,
    width: width / 1.63,
    marginTop: 25,
  },
  fieldSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 0.8,
    // borderBottomColor: "#d6d6d6",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  username: {
    flex: 1,
    // backgroundColor: "#fff",
    paddingLeft: 15,
    // alignSelf: "center",
    // marginBottom: -15,
  },
  iconTextInput: {
    paddingRight: 15,
    marginBottom: 0,
    // backgroundColor: "red",
  },
  forgotContainer: {
    width: width / 3,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  forgotText: {
    color: "white",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  loginContainer: {
    marginTop: 30,
    height: 46,
    borderRadius: 20,
    width: width / 1.63,
  },
  loginText: {
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 13,
  },
  orText: {
    alignSelf: "center",
    color: "white",
    fontSize: 14,
    marginTop: 30,
    marginBottom: 30,
  },
  socialMediaContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  socialMediaIcons: {
    height: 50,
    width: 50,
  },
};

export default styles;
