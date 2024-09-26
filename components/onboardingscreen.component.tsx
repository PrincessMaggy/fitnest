import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
// import {Image} from 'expo-image'

interface OnboardingScreenProps {
  imageSource: ImageSourcePropType;
  story: string;
  title: string;
  iconSource: ImageSourcePropType;
  onNext: () => void;
}

export default function OnboardingScreen({
  imageSource,
  title,
  story,
  iconSource,
  onNext,
}: OnboardingScreenProps) {
  return (
    <View>
      <View>
        <Image source={imageSource} style={styles.banner} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.story}>{story}</Text>
      </View>
      <TouchableOpacity onPress={onNext}>
        <Image source={iconSource} style={styles.nextbtn} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  story: {
    color: Colors.text.primary,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  title: {
    fontSize: Spacing.fontsizes.lg,
    marginBottom: 20,
    color: "#000",
    fontFamily: "PoppinsBold",
    // width: 200,
  },
  textContainer: {
    padding: Spacing.padding.md,
  },
  nextbtn: {
    top: Spacing.padding.xxl,
    alignSelf: "flex-end",
    left: Spacing.padding.sm / 6,
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});
