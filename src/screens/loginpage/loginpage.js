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
  ScrollView,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { AntDesign } from "@expo/vector-icons";
import styles from "./login.style";
// import Video from "expo-av";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        {/* <KeyboardAvoidingView behavior="padding" style={styles.keyboard}> */}
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.onkaLogo}
            />
            <Text style={styles.motto}>Chef on your doorstep</Text>
            <View style={styles.switchSelector}>
              <SwitchSelector
                initial={0}
                // onPress={(value) => this.setState({ gender: value })}
                textColor="black"
                selectedColor="white"
                buttonColor="#fab005"
                hasPadding
                height={42}
                options={[
                  { label: "Login", value: "login" },
                  { label: "Signup", value: "signup" },
                ]}
              />
            </View>
            <View style={styles.fieldContainer}>
              <View style={styles.fieldSubContainer}>
                <TextInput
                  color="#d6d6d6"
                  placeholder="Username"
                  placeholderTextColor="#d6d6d6"
                  borderBottomColor="#d6d6d6"
                  style={styles.username}
                />
                <AntDesign
                  name="user"
                  size={16}
                  color="white"
                  style={styles.iconTextInput}
                />
              </View>

              <View style={styles.fieldSubContainer}>
                <TextInput
                  color="#d6d6d6"
                  placeholder="Password"
                  placeholderTextColor="#d6d6d6"
                  borderBottomColor="#d6d6d6"
                  secureTextEntry={true}
                  style={styles.username}
                />
                <AntDesign
                  name="eye"
                  size={16}
                  color="white"
                  style={styles.iconTextInput}
                />
              </View>

              <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.loginContainer}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
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
