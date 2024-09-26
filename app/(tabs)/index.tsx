import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useContext, useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import { Colors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";

export default function Home() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const { user } = useContext(AuthenticationContext);
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
        <View style={styles.header}>
          <View style={{ flexDirection: "column", gap: 5 }}>
            <Text style={styles.greetingText}>Welcome Back, </Text>
            <Text style={styles.userName}>{user?.fullName}</Text>
          </View>
          <View style={styles.notificationIcon}>
            <Image
              style={styles.notificationIcon}
              source={require("../../assets/images/Notificationicon.png")}
            />
          </View>
        </View>

        {/* BMI Card Section */}
        <LinearGradient
          colors={["#9AC4FF", "#6B82FD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bmiCard}
        >
          <Text style={styles.bmiTitle}>BMI (Body Mass Index)</Text>
          <Text style={styles.bmiSubtitle}>You have a normal weight</Text>
          <View style={styles.bmiValueContainer}>
            <Text style={styles.bmiValue}></Text>
          </View>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Today Target Section */}
        <View style={styles.targetContainer}>
          <Text style={styles.targetTitle}>Today Target</Text>
          <TouchableOpacity>
            <LinearGradient
              colors={["#9AC4FF", "#6B82FD"]}
              style={styles.checkButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.checkButtonText}>Check</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Activity Status Section */}
        <View style={styles.activityStatus}>
          <Text style={styles.sectionTitle}>Activity Status</Text>
          <View style={styles.heartRateContainer}>
            <Text style={styles.heartRateValue}>Heart Rate</Text>
            <Text style={styles.heartRateData}>78 BPM</Text>
            <Text style={styles.timeAgo}>3 mins ago</Text>
          </View>
          {/* Add your graph or any additional components here */}
        </View>

        {/* Additional Cards (Water Intake, Sleep, etc.) */}
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Water Intake</Text>
            <Text style={styles.cardValue}>4 Liters</Text>
            <Text style={styles.cardSubtitle}>Real-time updates</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Sleep</Text>
            <Text style={styles.cardValue}>8h 20m</Text>
            <Text style={styles.cardSubtitle}>Restful Sleep</Text>
          </View>
        </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  greetingText: {
    fontSize: 16,
    color: Colors.text.secondary,
  },
  userName: {
    color: "#333",
    fontSize: Spacing.fontsizes.md,
    fontFamily: "PoppinsBold",
  },
  notificationIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  bmiCard: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  bmiTitle: {
    color: "#FFF",
    fontSize: 18,
  },
  bmiSubtitle: {
    color: "#DDD",
    fontSize: 14,
    marginVertical: 5,
  },
  bmiValueContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#FFF",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bmiValue: {
    color: "#6B82FD",
    fontSize: 16,
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: "#EAB8FF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  viewMoreText: {
    color: "#FFF",
    fontSize: 12,
  },
  targetContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E9F0FF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  targetTitle: {
    fontSize: 16,
    color: "#333",
  },
  checkButton: {
    backgroundColor: "#9AC4FF",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  checkButtonText: {
    color: "#FFF",
    fontSize: 12,
  },
  activityStatus: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  heartRateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E9F0FF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  heartRateValue: {
    fontSize: 16,
    color: "#333",
  },
  heartRateData: {
    fontSize: 24,

    color: "#4A80FF",
  },
  timeAgo: {
    fontSize: 12,
    color: "#AAA",
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#333",
  },
  cardValue: {
    fontSize: 24,

    color: "#4A80FF",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#AAA",
  },
});
