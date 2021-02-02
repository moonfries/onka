import React, { PureComponent } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import Menu from "../components/Menu";
import Supply from "../components/Supply";

const { width } = Dimensions.get("window");

class MenuSupply extends PureComponent {
  state = {
    selectedTab: 0,
  };

  renderTabContent = (selected) => {
    switch (selected) {
      case 0:
        return <Menu />;
      case 1:
        return <Supply />;
      default:
        return null;
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ selectedTab: 0 });
            }}
            style={styles.buttons}
          >
            <View
              style={[
                styles.overlay,
                {
                  backgroundColor: selectedTab === 0 ? "transparent" : 0,
                  borderBottomWidth: selectedTab === 0 ? 1 : 0,
                  // opacity: selectedTab === 0 ? 1 : 0.6,
                  height: selectedTab === 0 ? 42 : 40,
                },
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  {
                    // marginRight: Platform.OS === "android" ? 10 : 20,
                    fontSize: selectedTab === 0 ? 16 : 16,
                  },
                ]}
              >
                Menu
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ selectedTab: 1 })}
            style={styles.buttons}
          >
            <View
              style={[
                styles.overlay,
                {
                  backgroundColor: selectedTab === 1 ? "transparent" : 0,
                  borderBottomWidth: selectedTab === 1 ? 1 : 0,
                  // opacity: selectedTab === 1 ? 1 : 0.6,
                  height: selectedTab === 1 ? 42 : 40,
                },
              ]}
            >
              <Text
                fontWeight="bold"
                color="#fff"
                style={[
                  styles.buttonText1,
                  {
                    // marginRight: Platform.OS === "android" ? 25 : 15,
                    fontSize: selectedTab === 1 ? 16 : 16,
                  },
                ]}
              >
                Supply
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View>{this.renderTabContent(selectedTab)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // marginTop: 10,
  //   // width: "20%",
  //   // width: width / 5,
  //   backgroundColor: "green",
  // },
  overlay: {
    // borderWidth: 1,
    borderColor: "#fff",
    flexDirection: "row",
    height: 40,
    width: width / 5,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  // buttonStyle: {
  //   width: width / 4.5,
  //   borderWidth: 1,
  //   borderColor: "red",
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   marginRight: 10,
  // },
  textStyle: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 7,
    color: "#fff",
    ...Platform.select({
      ios: {
        marginTop: 5,
      },
    }),
  },
  icons: {
    width: 20,
    height: 15,
    marginLeft: 10,
  },
  buttonText: {
    marginLeft: 15,
    color: "white",
  },
  buttonText1: {
    marginLeft: 10,
    color: "white",
  },
});

export default MenuSupply;
