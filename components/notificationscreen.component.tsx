import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";

interface GoalScreenProps {
  imageSource: ImageSourcePropType;
  timeline: string;
  title: string;
}

export default function NotificationScreen({
  imageSource,
  title,
  timeline,
}: GoalScreenProps) {
  return (
    <ScrollView>
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
      <View style={styles.line} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    gap: 10,
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

  line: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.text.disabled,
    marginBottom: Spacing.padding.md,
    marginTop: Spacing.padding.md,
    alignSelf: "center",
  },
  more: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
