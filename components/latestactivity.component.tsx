import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";

interface GoalScreenProps {
  imageSource: ImageSourcePropType;
  timeline: string;
  title: string;
}

export default function LatestActivity({
  imageSource,
  title,
  timeline,
}: GoalScreenProps) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.timeline}>{timeline}</Text>
      </View>
      <Image
        source={require("../assets/images/Iconmore.png")}
        style={styles.more}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Spacing.padding.md,
    gap: Spacing.padding.md,
    marginVertical: Spacing.padding.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 15,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: "#FFF",
  },
  img: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    alignSelf: "center",
  },
  timeline: {
    color: Colors.text.primary,
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },

  title: {
    fontSize: 14,
    marginBottom: 10,
    color: Colors.ui.secondary,
    fontFamily: "PoppinsRegular",
  },
  textContainer: {
    paddingTop: Spacing.padding.md,
    paddingLeft: Spacing.padding.md,
    textAlign: "center",
    flex: 1,
  },
  more: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
