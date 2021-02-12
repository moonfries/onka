import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const ChefTab = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Image
        source={require("../assets/images/menu4.jpg")}
        style={styles.banner}
      />

      <View style={styles.labelContainer}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fd7e14" }}>
          Chef on your doorstep
        </Text>
        <Entypo name="dots-three-vertical" size={17} color="black" />
      </View>

      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            // marginLeft: 20,
            // marginRight: 20,
            // flexDirection: "row",
            marginBottom: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <ImageBackground
              source={require("../assets/images/chef1.jpg")}
              imageStyle={{ borderRadius: 20 }}
              style={styles.image1}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("../assets/images/featured1.png")}
                  style={{ width: 50, height: 52 }}
                />
                <View
                // style={{
                //   justifyContent: "flex-end",
                //   height: "100%",
                // }}
                >
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      height: 67,
                      backgroundColor: "rgba(52, 52, 52, 0.8)",
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "80%",
                        marginTop: 7,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          Chef Kim
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          {/* <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" /> */}
                        </View>
                      </View>
                      <Image
                        source={require("../assets/images/followwhite.png")}
                        style={{ width: 18, height: 18 }}
                      />
                      {/* <Feather name="bookmark" size={24} color="#fff" /> */}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "80%",
                        alignSelf: "center",
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/nearbymarker.png")}
                          style={{ width: 14, height: 14 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          0.5
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/edit.png")}
                          style={{ width: 12, height: 12 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          25
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/ordertrack.png")}
                          style={{ width: 19, height: 19 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          15
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.imageContainer}>
              <ImageBackground
                source={require("../assets/images/chef2.jpg")}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image1}
              >
                <View
                  style={{
                    height: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    source={require("../assets/images/featured1.png")}
                    style={{ width: 50, height: 52 }}
                  />
                  <View
                  // style={{
                  //   justifyContent: "flex-end",
                  //   height: "100%",
                  // }}
                  >
                    <View
                      style={{
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        height: 67,
                        backgroundColor: "rgba(52, 52, 52, 0.8)",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignSelf: "center",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "80%",
                          marginTop: 7,
                        }}
                      >
                        <View>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#fff",
                            }}
                          >
                            Chef Lea
                          </Text>
                          <View style={{ flexDirection: "row" }}>
                            <Image
                              source={require("../assets/images/star.png")}
                              style={{ width: 8, height: 8 }}
                            />
                            <Image
                              source={require("../assets/images/star.png")}
                              style={{ width: 8, height: 8 }}
                            />
                            <Image
                              source={require("../assets/images/star.png")}
                              style={{ width: 8, height: 8 }}
                            />
                            {/* <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" /> */}
                          </View>
                        </View>
                        <Image
                          source={require("../assets/images/followwhite.png")}
                          style={{ width: 18, height: 18 }}
                        />
                        {/* <Feather name="bookmark" size={24} color="#fff" /> */}
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "80%",
                          alignSelf: "center",
                          marginTop: 5,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={require("../assets/images/nearbymarker.png")}
                            style={{ width: 14, height: 14 }}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontSize: 11,
                              fontWeight: "bold",
                              marginLeft: 2,
                            }}
                          >
                            0.5
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={require("../assets/images/edit.png")}
                            style={{ width: 12, height: 12 }}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontSize: 11,
                              fontWeight: "bold",
                              marginLeft: 2,
                            }}
                          >
                            25
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={require("../assets/images/ordertrack.png")}
                            style={{ width: 19, height: 19 }}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontSize: 11,
                              fontWeight: "bold",
                              marginLeft: 2,
                            }}
                          >
                            15
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              {/* <Image
                source={require("../assets/images/chef2.jpg")}
                style={styles.image}
              /> */}
            </View>
          </View>
        </View>

        <View
          style={{
            // marginLeft: 20,
            // marginRight: 20,
            marginBottom: 20,
            // flexDirection: "row",
            // justifyContent: "space-between",
            // backgroundColor: "red",
          }}
        >
          <View style={styles.hashtagContainer}>
            <View style={{ marginTop: 15 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 24,
                  borderRadius: 9,
                  width: width / 5,
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  #Pastry
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 24,
                  borderRadius: 9,
                  width: width / 4.5,
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  #Vegetarian
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#fff",
                  height: 24,
                  borderRadius: 9,
                  width: width / 4.5,
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginTop: 5,
                  }}
                >
                  #Seafoods
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../assets/images/chef3.jpg")}
              imageStyle={{ borderRadius: 20 }}
              style={styles.image1}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("../assets/images/featured1.png")}
                  style={{ width: 50, height: 52 }}
                />
                <View
                // style={{
                //   justifyContent: "flex-end",
                //   height: "100%",
                // }}
                >
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      height: 67,
                      backgroundColor: "rgba(52, 52, 52, 0.8)",
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "80%",
                        marginTop: 7,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          Chef Mona
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          {/* <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" /> */}
                        </View>
                      </View>
                      <Image
                        source={require("../assets/images/followwhite.png")}
                        style={{ width: 18, height: 18 }}
                      />
                      {/* <Feather name="bookmark" size={24} color="#fff" /> */}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "80%",
                        alignSelf: "center",
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/nearbymarker.png")}
                          style={{ width: 14, height: 14 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          0.5
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/edit.png")}
                          style={{ width: 12, height: 12 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          25
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/ordertrack.png")}
                          style={{ width: 19, height: 19 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          15
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../assets/images/chef1.jpg")}
              imageStyle={{ borderRadius: 20 }}
              style={styles.image1}
            >
              <View
                style={{
                  height: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={require("../assets/images/featured1.png")}
                  style={{ width: 50, height: 52 }}
                />
                <View
                // style={{
                //   justifyContent: "flex-end",
                //   height: "100%",
                // }}
                >
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      height: 67,
                      backgroundColor: "rgba(52, 52, 52, 0.8)",
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "80%",
                        marginTop: 7,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          Chef Kim
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          <Image
                            source={require("../assets/images/star.png")}
                            style={{ width: 8, height: 8 }}
                          />
                          {/* <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" />
                        <AntDesign name="star" size={10} color="yellow" /> */}
                        </View>
                      </View>
                      <Image
                        source={require("../assets/images/followwhite.png")}
                        style={{ width: 18, height: 18 }}
                      />
                      {/* <Feather name="bookmark" size={24} color="#fff" /> */}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "80%",
                        alignSelf: "center",
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/nearbymarker.png")}
                          style={{ width: 14, height: 14 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          0.5
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/edit.png")}
                          style={{ width: 12, height: 12 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          25
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={require("../assets/images/ordertrack.png")}
                          style={{ width: 19, height: 19 }}
                        />
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 11,
                            fontWeight: "bold",
                            marginLeft: 2,
                          }}
                        >
                          15
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChefTab;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  banner: {
    height: 197,
    width: 393,
  },
  // imageContainer: {
  //   backgroundColor: "red",
  //   width: width / 3.5,
  // },
  image: {
    borderRadius: 20,
    width: width / 2.4,
    height: 260,
  },
  imageContainer: {
    marginTop: 10,
  },
  image1: {
    width: width / 2.4,
    height: 260,
  },
  hashtagContainer: {
    height: 128,
    backgroundColor: "orange",
    width: width / 2.4,
    borderRadius: 20,
  },
});
