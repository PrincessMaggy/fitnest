import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { useNavigation } from "@react-navigation/native";

interface HeaderComponentProps {
  title: string;
}
const HeaderComponent = ({ title }: HeaderComponentProps) => {
  const navigation: any = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/images/back_nav.png")}
          style={styles.backarrow}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            color: Colors.ui.secondary,
            fontFamily: "PoppinsBold",
            fontSize: Spacing.fontsizes.md,
          }}
        >
          {title}
        </Text>
      </View>
      <View style={styles.notificationBg}>
        <Image
          source={require("../assets/images/notification.png")}
          style={styles.notification}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backarrow: {
    width: 50,
    height: 50,
  },
  notification: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  notificationBg: {
    backgroundColor: Colors.bg.primary,
    padding: 10,
    borderRadius: 10,
  },
});
export default HeaderComponent;
