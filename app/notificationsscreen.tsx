import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useRef } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import NotificationScreen from "@/components/notificationscreen.component";

export default function NotificationsScreen() {
  const navigation: any = useNavigation();

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
          <Text>Notification</Text>
        </View>
        <Image
          source={require("../assets/images/notification.png")}
          style={styles.notification}
        />
      </View>
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
    paddingTop: 30,
  },

  backIcon: {
    width: 24,
    height: 24,
  },
  backarrow: {
    width: 50,
    height: 50,
  },
  notification: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
