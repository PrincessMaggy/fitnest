import { SafeAreaView, StatusBar, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Spacing } from "@/constants/Spacing";

export default function SignUpScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Spacing.padding.sm,
      }}
    >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Text>sign up</Text>
    </SafeAreaView>
  );
}
