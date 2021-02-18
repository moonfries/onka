import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { AntDesign } from "@expo/vector-icons";
import styles from "./login.style";
// import Video from "expo-av";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <ImageBackground
        source={require("../../assets/images/loginbg.jpg")}
        style={{ height: "100%" }}
      > */}
      <ScrollView>
        {/* <KeyboardAvoidingView behavior="padding" style={styles.keyboard}> */}
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.onkaLogo}
            />
            <Text style={styles.motto}>Your Personal Chef</Text>
            <View style={styles.switchSelector}>
              <SwitchSelector
                initial={0}
                // onPress={(value) => this.setState({ gender: value })}
                textColor="#6f6f6f"
                selectedColor="#fff"
                buttonColor="#fab005"
                selectedTextStyle={{ fontWeight: "bold" }}
                fontSize={14}
                hasPadding
                height={46}
                options={[
                  { label: "Login", value: "login" },
                  { label: "Signup", value: "signup" },
                ]}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldSubContainer}>
                <TextInput
                  color="#6f6f6f"
                  value="Test"
                  placeholderTextColor="#6f6f6f"
                  borderBottomColor="#6f6f6f"
                  style={styles.username}
                />
                <AntDesign
                  name="user"
                  size={16}
                  color="#6f6f6f"
                  style={styles.iconTextInput}
                />
              </View>

              <View style={styles.fieldSubContainer}>
                <TextInput
                  color="#6f6f6f"
                  value="*******"
                  placeholderTextColor="#6f6f6f"
                  // borderBottomColor="red"
                  secureTextEntry={true}
                  style={styles.username}
                />
                <AntDesign
                  name="eye"
                  size={16}
                  color="#6f6f6f"
                  style={styles.iconTextInput}
                />
              </View>

              <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#fab005" : "#fab005",
                },
                styles.loginContainer,
              ]}
            >
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
            <Text style={styles.orText}>Or</Text>
            <View style={styles.socialMediaContainer}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/fb.png")}
                  style={styles.socialMediaIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/twitter.png")}
                  style={styles.socialMediaIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/insta.png")}
                  style={styles.socialMediaIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/gmail.png")}
                  style={styles.socialMediaIcons}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
}

export default LoginScreen;

// <Video
//   source={require("../../assets/vids/loginvid.mp4")}
//   rate={1.0}
//   volume={1.0}
//   isMuted={false}
//   resizeMode="cover"
//   shouldPlay
//   isLooping
//   style={{ width: 300, height: 300 }}
// />;

// import React, { Component } from "react";
// import {
//   KeyboardAvoidingView,
//   ScrollView,
//   View,
//   TextInput,
// } from "react-native";

// export default class Test extends Component {
//   render() {
//     return (
//       // <ScrollView style={{ flex: 1, backgroundColor: "white" }} ref="scroll">
//       <KeyboardAvoidingView
//         behavior="position"
//         style={{ backgroundColor: "white", flex: 1 }}
//       >
//         <View style={{ height: 400 }} />
//         <TextInput style={{ height: 60 }} placeholder="Example 1" />
//         <TextInput style={{ height: 60 }} placeholder="Example 2" />
//         <TextInput style={{ height: 10 }} placeholder="Example 3" />
//       </KeyboardAvoidingView>
//       // </ScrollView>
//     );
//   }
// }
