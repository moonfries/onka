import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Touchable,
  ScrollView,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BreakfastTab from "./BreakfastTab";
import LunchTab from "./LunchTab";
import DinnerTab from "./DinnerTab";
import DessertTab from "./DessertTab";
import SnacksTab from "./SnacksTab";
import DrinksTab from "./DrinksTab";

const { width } = Dimensions.get("window");

class StoreMenu extends PureComponent {
  state = {
    selectedTab: 0,
  };

  renderTabContent = (selected) => {
    switch (selected) {
      case 0:
        return <BreakfastTab />;
      case 1:
        return <LunchTab />;
      case 2:
        return <DinnerTab />;
      case 3:
        return <DessertTab />;
      case 4:
        return <SnacksTab />;
      case 5:
        return <DrinksTab />;
      default:
        return null;
    }
  };
  render() {
    const { selectedTab } = this.state;
    const { navigation } = this.props;

    return (
      <View>
        <ScrollView horizontal>
          <View style={styles.tab}>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 0 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight: selectedTab === 0 ? "bold" : "normal",
                      },
                    ]}
                  >
                    Breakfast
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 0 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 1 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      { fontWeight: selectedTab === 1 ? "bold" : "normal" },
                    ]}
                  >
                    Lunch
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 1 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 2 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight: selectedTab === 2 ? "bold" : "normal",
                      },
                    ]}
                  >
                    Dinner
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 2 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 3 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight: selectedTab === 3 ? "bold" : "normal",
                      },
                    ]}
                  >
                    Dessert
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 3 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 4 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight: selectedTab === 4 ? "bold" : "normal",
                      },
                    ]}
                  >
                    Snacks
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 4 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.iconContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ selectedTab: 5 });
                }}
              >
                <View style={styles.content}>
                  <Text
                    style={[
                      styles.label,
                      {
                        fontWeight: selectedTab === 5 ? "bold" : "normal",
                      },
                    ]}
                  >
                    Drinks
                  </Text>
                  <AntDesign
                    name="caretup"
                    size={25}
                    // color="#e9ecef"
                    style={[
                      styles.caret,
                      {
                        color: selectedTab === 5 ? "#e9ecef" : "transparent",
                      },
                    ]}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View>{this.renderTabContent(selectedTab)}</View>
        </ScrollView>
      </View>
    );
  }
}

export default StoreMenu;

const styles = StyleSheet.create({
  label: {
    color: "#343A40",
    fontSize: 14,
    // marginRight: 20,
    marginRight: 10,
    marginLeft: 10,
  },
  content: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    alignItems: "center",
    borderRadius: 4,
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  caret: {
    marginBottom: -8,
  },
});
