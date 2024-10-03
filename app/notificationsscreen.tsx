import {
  SafeAreaView,
  StatusBar,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRef } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import NotificationScreen from "@/components/notificationscreen.component";
import HeaderComponent from "@/components/header.component";
import { Spacing } from "@/constants/Spacing";

export default function NotificationsScreen() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const imageSources = [
    require("../assets/images/notify1.png"),
    require("../assets/images/notify2.png"),
    require("../assets/images/notify3.png"),
    require("../assets/images/notify1.png"),
    require("../assets/images/notify4.png"),
  ];

  const titles = [
    "Hey, it’s time for lunch",
    "Don’t miss your lowerbody workout",
    "Hey, let’s add some meals for your b..",
    "Congratulations, You have finished A..",
    "Ups, You have missed your Lowerbo...",
  ];
  const timeline = [
    "About 1 minute ago",
    "About 3 hours ago",
    "About 3 hours ago",
    "29 May",
    "3 April",
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <HeaderComponent title="Notification" />
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
          <View>
            {[...Array(5)].map((_, index) => (
              <View key={index}>
                <NotificationScreen
                  imageSource={imageSources[index]}
                  title={titles[index]}
                  timeline={timeline[index]}
                />
              </View>
            ))}
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
});
