import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = {
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    justifyContent: "space-between",
    height: "100%",
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  controlsLeft: {
    height: 30,
    width: 30,
  },
  senderContainer: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  dp: {
    height: 50,
    width: 50,
    marginTop: 5,
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
  },
  listBody: {
    marginTop: 20,
  },
  listBody1: {
    marginTop: 5,
  },
  chatContainer: {
    borderRadius: 16,
    alignSelf: "flex-end",
    backgroundColor: "gray",
    height: 60,
    marginTop: 5,
    width: width / 1.6,
    marginRight: 20,
  },
  chatText: {
    marginTop: 10,
    color: "#fff",
    alignSelf: "center",
  },
  chatDate: {
    color: "#868e96",
    fontSize: 12,
    alignSelf: "flex-end",
    marginRight: 10,
  },
  recievedChatContainer: {
    borderRadius: 16,
    alignSelf: "flex-start",
    backgroundColor: "#fa5252",
    height: 50,
    marginTop: 5,
    width: width / 2,
    marginLeft: 10,
  },
  recievedChatText: {
    marginTop: 15,
    color: "#fff",
    alignSelf: "center",
  },
  type: {
    borderRadius: 16,
    alignSelf: "center",
    width: width / 1.03,
    backgroundColor: "gray",
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
  },
};

export default styles;
