import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    // backgroundColor: "red",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    width: 160,
    height: 240,
  },
  motto: {
    color: "white",
    fontSize: 16,
  },
  switchSelector: {
    width: width / 1.6,
    marginTop: 35,
  },
  fieldContainer: {
    width: width / 1.55,
    marginTop: 15,
  },
  fieldSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.8,
    borderBottomColor: "#d6d6d6",
    height: 40,
    borderRadius: 5,
  },
  username: {
    flex: 1,
    paddingLeft: 5,
    marginBottom: -15,
  },
  iconTextInput: {
    margin: 5,
    marginBottom: -10,
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
    backgroundColor: "#ef624f",
    marginTop: 30,
    height: 46,
    borderRadius: 20,
    width: "65%",
  },
  loginText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
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
    height: 48,
    width: 48,
  },
};

export default styles;
