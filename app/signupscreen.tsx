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
import CheckBox from "@react-native-community/checkbox";
import { useState, useRef } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation: any = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);

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
                fontSize: 15,
                marginTop: Spacing.padding.md,
              }}
            >
              Hey there,
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.brand.headercolor,
                fontSize: Spacing.fontsizes.md,
                marginBottom: Spacing.padding.md,
              }}
            >
              Create an Account
            </Text>
            <View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/Profile.png")}
                  style={styles.icon}
                />
                <TextInput
                  onChangeText={setFirstname}
                  value={firstname}
                  placeholder="First Name"
                  style={styles.input}
                  placeholderTextColor={Colors.text.primary}
                />
              </View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/Profile.png")}
                  style={styles.icon}
                />
                <TextInput
                  onChangeText={setLastname}
                  value={lastname}
                  style={styles.input}
                  placeholder="Last Name"
                  placeholderTextColor={Colors.text.primary}
                />
              </View>
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
            <View style={styles.checkContainer}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                tintColors={{ true: "#6B82FD", false: "#D3D3D3" }}
                onFillColor="#6B82FD"
                onCheckColor="#FFFFFF"
                // boxType="circle"
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <Text style={styles.condition}>
                By continuing you accept our {/* <TouchableOpacity> */}
                <Text style={styles.privacy}>Privacy Policy </Text>
                {/* </TouchableOpacity> */}
                and {/* <TouchableOpacity> */}
                <Text style={styles.terms}>Term of Use</Text>
                {/* </TouchableOpacity> */}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("profilecreationscreen");
              }}
            >
              <LinearGradient
                colors={["#9AC4FF", "#6B82FD"]}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.button}>Register</Text>
              </LinearGradient>
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
                Already have an account?{" "}
              </Text>
              <TouchableOpacity
                style={{ alignSelf: "flex-start" }}
                onPress={() => navigation.navigate("loginscreen")}
              >
                <Text style={styles.loginText}>Login</Text>
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
    paddingTop: Spacing.padding.xl,
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
    marginTop: Spacing.padding.xxl,
    padding: Spacing.padding.md,
    borderRadius: 50,
  },
  privacy: {
    textDecorationLine: "underline",
    fontSize: 11,
    color: Colors.text.secondary,
  },
  terms: {
    textDecorationLine: "underline",
    fontSize: 11,
    color: Colors.text.secondary,
  },
  checkContainer: {
    flexDirection: "row",
    gap: Spacing.padding.md,
    width: Dimensions.get("window").width / 1.2,
    alignContent: "center",
    alignItems: "center",
  },
  condition: {
    color: Colors.text.secondary,
    fontFamily: "PoppinsRegular",
    width: Dimensions.get("window").width / 1.4,
    fontSize: 12,
    lineHeight: 17,
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
