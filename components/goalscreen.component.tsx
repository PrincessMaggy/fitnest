import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

interface GoalScreenProps {
  imageSource: ImageSourcePropType;
  story: string;
  title: string;
  heading: string;
  subheading: string;
  onNext: () => void;
}

export default function GoalScreen({
  heading,
  subheading,
  imageSource,
  title,
  story,
  onNext,
}: GoalScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subheading}>{subheading}</Text>
          </View>

          <LinearGradient
            colors={["#9AC4FF", "#94A7FE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bannerContainer}
          >
            <Image source={imageSource} style={styles.banner} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.line} />
              <Text style={styles.story}>{story}</Text>
            </View>
          </LinearGradient>

          <TouchableOpacity onPress={onNext}>
            <LinearGradient
              colors={["#9AC4FF", "#94A7FE"]}
              style={styles.background}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={{ color: "#ffffff", fontFamily: "PoppinsBold" }}>
                Confirm
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    alignItems: "center",
  },
  heading: {
    fontFamily: "PoppinsBold",
    fontSize: Spacing.padding.lg,
    marginTop: Spacing.padding.sm,
  },
  subheading: {
    fontFamily: "Poppins",
    width: Dimensions.get("window").width / 2,
    marginTop: Spacing.padding.sm,
    alignSelf: "center",
    textAlign: "center",
    color: Colors.text.primary,
  },
  bannerContainer: {
    width: Dimensions.get("window").width / 1.3,
    borderRadius: 20,
    height: Dimensions.get("window").height / 1.6,
    alignSelf: "center",
    backgroundColor: Colors.brand.primary,
    margin: Spacing.padding.md,
  },
  banner: {
    // position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3.2,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: Spacing.padding.xxl,
  },
  story: {
    color: "#ffffff",
    fontFamily: "Poppins",
    fontSize: 14,
    textAlign: "center",
    width: 250,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: Spacing.fontsizes.md,
    marginBottom: 20,
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
  textContainer: {
    paddingTop: Spacing.padding.xxl,
    alignItems: "center",
  },
  nextbtn: {
    top: Spacing.padding.xxl,
    alignSelf: "flex-end",
    left: Spacing.padding.sm / 6,
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  background: {
    flexDirection: "row",
    width: Dimensions.get("window").width / 1.3,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.padding.md,
    borderRadius: 50,
  },
  line: {
    height: 1,
    width: "20%",
    backgroundColor: "#FFFFFF",
    marginBottom: Spacing.padding.lg,
  },
});
