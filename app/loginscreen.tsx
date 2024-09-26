import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useRef, useContext } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "@/context/AuthenticationContext";

export default function LoginScreen() {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const { onLogin } = useContext(AuthenticationContext);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
        }}
        extraScrollHeight={70}
        enableOnAndroid={true}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{
                fontFamily: "PoppinsRegular",
                color: Colors.brand.headercolor,
              }}
            >
              Hey there,
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.brand.headercolor,
                fontSize: Spacing.fontsizes.md,
                marginBottom: Spacing.padding.lg,
              }}
            >
              Welcome Back
            </Text>
            <View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/Message.png")}
                  style={styles.icon}
                />
                <TextInput
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Email"
                  style={styles.input}
                  placeholderTextColor={Colors.text.primary}
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/Lock.png")}
                  style={styles.icon}
                />
                <TextInput
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry={!passwordVisible}
                  placeholderTextColor={Colors.text.primary}
                />
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={20}
                  color={Colors.text.secondary}
                  style={styles.icon2}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("registrationsuccessscreen");
                onLogin(email, password);
              }}
            >
              <LinearGradient
                colors={["#9AC4FF", "#6B82FD"]}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                {/* <Image
                  style={{
                    width: 10,
                    height: 10,
                    resizeMode: "contain",
                  }}
                  src={require("../assets/images/Login.png")}
                /> */}
                <Text style={styles.button}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot your password? </Text>
            </TouchableOpacity>

            <View style={styles.lineContainer}>
              <View style={styles.line} />
              <Text>Or</Text>
              <View style={styles.line} />
            </View>
            <View style={styles.socialContainer}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/google.png")}
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/facebook.png")}
                  style={styles.socialIcons}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                }}
              >
                Don't have an account yet?{" "}
              </Text>
              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
                onPress={() => navigation.navigate("signupscreen")}
              >
                <Text style={styles.loginText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  container: {
    marginTop: Spacing.padding.lg,
    alignItems: "center",
    gap: Spacing.padding.md,
  },
  inputContainer: {
    position: "relative",
    marginBottom: Spacing.padding.lg,
    backgroundColor: Colors.bg.primary,
    borderRadius: 15,
  },
  input: {
    height: 50,
    paddingHorizontal: 40,
    fontFamily: "PoppinsRegular",
    width: Dimensions.get("window").width / 1.2,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 15,
    width: 20,
    height: 20,
  },
  icon2: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.padding.md,
    width: Dimensions.get("window").width / 1.2,
    gap: Spacing.padding.md,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.text.secondary,
  },
  button: {
    alignItems: "center",
    color: Colors.text.inverse,
    fontFamily: "PoppinsBold",
  },
  background: {
    width: Dimensions.get("window").width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("window").height / 6,
    padding: Spacing.padding.md,
    borderRadius: 50,
  },
  forgot: {
    textDecorationLine: "underline",
    fontSize: 11,
    color: Colors.text.secondary,
  },

  socialIcons: {
    width: 60,
    height: 60,
  },
  socialContainer: {
    flexDirection: "row",
    gap: Spacing.padding.lg,
  },
  loginText: {
    color: Colors.brand.grad1,
    fontFamily: "PoppinsRegular",
  },
});
