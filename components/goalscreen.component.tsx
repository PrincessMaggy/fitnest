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
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </View>
        <LinearGradient
          colors={["rgba(146, 163, 253, 0.2)", "rgba(146, 163, 253, 0.2)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.sidebar}
        />
        <LinearGradient
          colors={["rgba(146, 163, 253, 0.2)", "rgba(146, 163, 253, 0.2)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.sidebar2}
        />
        <LinearGradient
          colors={["#9AC4FF", "#6B82FD"]}
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
            colors={["#9AC4FF", "#6B82FD"]}
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
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 30,
  },
  heading: {
    fontFamily: "PoppinsBold",
    fontSize: Spacing.padding.lg,
    alignSelf: "center",
    textAlign: "center",
    // marginTop: Spacing.padding.sm,
  },
  subheading: {
    fontFamily: "PoppinsRegular",
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
  sidebar: {
    position: "absolute",
    top: "30%",
    left: -20,
    marginRight: 40,
    width: Dimensions.get("window").width / 9,
    borderRadius: 20,
    height: Dimensions.get("window").height / 3,
    backgroundColor: "rgba(146, 163, 253, 0.2)",
  },
  sidebar2: {
    position: "absolute",
    top: "30%",
    right: -20,
    marginLeft: 40,
    width: Dimensions.get("window").width / 9,
    borderRadius: 20,
    height: Dimensions.get("window").height / 3,
    backgroundColor: "rgba(146, 163, 253, 0.2)",
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
    fontFamily: "PoppinsRegular",
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
