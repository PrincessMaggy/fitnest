import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function LaunchScreen() {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <LinearGradient
        colors={["#9AC4FF", "#6B82FD"]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
      <View style={styles.container}>
        <Image
          source={require("../assets/images/fitnessX2.png")}
          style={styles.logo}
        />
        <Text style={styles.subtext}>Everybody Can Train</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("onboardingscreens")}
        >
          <Button style={styles.button}>
            <Text style={styles.text}>Get Started</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Spacing.padding.sm,
  },
  container: {
    position: "absolute",
    top: Spacing.padding.md,
    height: Dimensions.get("window").height / 1.2,
    width: Dimensions.get("window").width,
    justifyContent: "center",
    flexDirection: "column",
    gap: Spacing.padding.md,
    alignContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: Dimensions.get("window").width / 2.8,
    height: Dimensions.get("window").height / 20,

    resizeMode: "contain",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    // color: Colors.text.primary,
    color: "#ffffff",
    fontSize: Spacing.padding.md,
    fontFamily: "PoppinsRegular",
  },
  button: {
    padding: Spacing.padding.sm,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: Colors.text.inverse,
    marginTop: Spacing.padding.md,
    width: Dimensions.get("window").width / 1.4,
  },
  buttonContainer: {
    position: "absolute",
    bottom: Spacing.padding.lg,
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: "#6B82FD",
    fontSize: 15,
    fontFamily: "PoppinsBold",
  },
});
