import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRef } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

export default function RegistrationSuccessScreen() {
  const navigation: any = useNavigation();
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
            <View>
              <Image
                source={require("../assets/images/successreg.png")}
                style={styles.banner}
              />
            </View>
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.brand.headercolor,
                fontSize: 18,
                marginTop: Spacing.padding.md,
              }}
            >
              Welcome, Maggy
            </Text>
            <Text
              style={{
                fontFamily: "Poppins",
                color: Colors.text.secondary,
                fontSize: 14,
                width: "60%",
                textAlign: "center",
              }}
            >
              You are all set now, let’s reach your goals together with us
            </Text>

            <TouchableOpacity
              onPress={() => {
                // navigation.navigate("home");
                Alert.alert("Coming Soon");
              }}
            >
              <LinearGradient
                colors={["#9AC4FF", "#6B82FD"]}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.button}>Go To Home</Text>
              </LinearGradient>
            </TouchableOpacity>
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
    paddingTop: 30,
  },
  container: {
    marginTop: Spacing.padding.lg,
    alignItems: "center",
    gap: Spacing.padding.md,
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
  banner: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    resizeMode: "stretch",
    alignSelf: "center",
  },
});
