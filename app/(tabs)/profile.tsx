import React, { useRef, useContext, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import HeaderComponent from "@/components/header.component";
import { LinearGradient } from "expo-linear-gradient";
import { AuthenticationContext } from "@/context/AuthenticationContext";

export default function Profile() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { user } = useContext(AuthenticationContext);
  const userInfo = [
    {
      val: "180cm",
      param: "Height",
    },
    {
      val: "22kg",
      param: "Weight",
    },
    {
      val: "22years",
      param: "Age",
    },
  ];
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}
        extraScrollHeight={70}
        enableOnAndroid={true}
      >
        <HeaderComponent title="Profile" />

        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <Image
            style={styles.profileImage}
            source={require("@/assets/images/drink.png")}
          />
          <View style={styles.profileTextContainer}>
            <Text style={styles.nameText}>{user?.fullName}</Text>
            <Text style={styles.programText}>Lose a Fat Program</Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.brand.grad3, Colors.brand.grad4]}
              style={styles.editbtn}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.editbtnText}>Edit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* User Statistics */}
        <View style={styles.statisticsContainer}>
          {userInfo.map((item, index) => (
            <View style={styles.statisticBox} key={index}>
              <Text style={styles.statisticText}>{item.val}</Text>
              <Text style={styles.statisticParam}>{item.param}</Text>
            </View>
          ))}
        </View>

        {/* Account Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Account</Text>
          {[
            {
              title: "Personal Data",
              icon: require("@/assets/images/profile2.png"),
            },
            {
              title: "Achievement",
              icon: require("@/assets/images/achievement.png"),
            },
            {
              title: "Activity History",
              icon: require("@/assets/images/activity2.png"),
            },
            {
              title: "Workout Progress",
              icon: require("@/assets/images/workout.png"),
            },
          ].map((item, index) => (
            <TouchableOpacity style={styles.optionContainer} key={index}>
              <Image source={item.icon} style={styles.optionIcon} />
              <Text style={styles.optionText}>{item.title}</Text>
              <Text style={styles.optionArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notification Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Notification</Text>
          <View style={styles.optionContainer}>
            <Image
              source={require("@/assets/images/notif.png")}
              style={styles.optionIcon}
            />

            <Text style={styles.optionText}>Pop-up Notification</Text>
            <Switch
              trackColor={{ false: "#fff", true: "#DD9ADD" }}
              thumbColor={"#fff"}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.6 }] }}
            />
          </View>
        </View>

        {/* Other Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Other</Text>
          {[
            {
              title: "Contact Us",
              icon: require("@/assets/images/message2.png"),
            },
            {
              title: "Privacy Policy",
              icon: require("@/assets/images/privacy.png"),
            },
            {
              title: "Settings",
              icon: require("@/assets/images/setting.png"),
            },
          ].map((item, index) => (
            <TouchableOpacity style={styles.optionContainer} key={index}>
              <Image source={item.icon} style={styles.optionIcon} />
              <Text style={styles.optionText}>{item.title}</Text>
              <Text style={styles.optionArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Spacing.padding.xl,
    backgroundColor: "#fff",
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 15,
    fontFamily: "PoppinsRegular",
    marginBottom: Spacing.padding.sm / 2,
  },
  programText: {
    fontSize: 11,
    fontFamily: "PoppinsRegular",
    color: Colors.text.primary,
  },
  editButton: {
    backgroundColor: "#E2E8F0",
    paddingVertical: Spacing.padding.sm,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#fff",
    fontFamily: "PoppinsRegular",
  },
  statisticsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  statisticBox: {
    width: 100,
    shadowColor: "#000",
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 15,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingBottom: 20,
    paddingTop: 20,
    elevation: 5,
    alignItems: "center",
  },
  statisticText: {
    fontSize: 13,
    fontFamily: "PoppinsRegular",
    color: Colors.brand.primary,
  },
  statisticParam: {
    fontSize: 13,
    fontFamily: "PoppinsRegular",
    color: Colors.text.primary,
  },
  sectionContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingBottom: 20,
    paddingTop: 20,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: Spacing.fontsizes.md,
    fontFamily: "PoppinsBold",
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  optionIcon: {
    width: 18,
    height: 18,
    marginRight: 15,
  },
  optionText: {
    fontSize: 13,
    fontFamily: "PoppinsRegular",
    color: Colors.text.primary,
    flex: 1,
  },
  optionArrow: {
    color: Colors.text.primary,
    fontSize: 20,
  },
  editbtn: {
    backgroundColor: Colors.brand.grad3,
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 20,
    width: 70,
  },
  editbtnText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "PoppinsRegular",
  },
});
