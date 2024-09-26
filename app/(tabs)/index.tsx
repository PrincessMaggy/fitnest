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
import BMICircle from "@/components/bmicircle";
import HeartRateGraph from "@/components/heartrategraph";

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
            <TouchableOpacity>
              <Image
                style={styles.notificationIcon}
                source={require("../../assets/images/Notificationicon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BMI Card Section */}
        <LinearGradient
          colors={["#9AC4FF", "#6B82FD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bmiCard}
        >
          <View>
            <Text style={styles.bmiTitle}>BMI (Body Mass Index)</Text>
            <Text style={styles.bmiSubtitle}>You have a normal weight</Text>
            <LinearGradient
              colors={["#EEA4CE", "#C58BF2"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.viewMoreButton}
            >
              <TouchableOpacity>
                <Text style={styles.viewMoreText}>View More</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <BMICircle bmi={22} />
        </LinearGradient>

        {/* Today Target Section */}
        <View style={styles.targetContainer}>
          <Text style={styles.targetTitle}>Today's Target</Text>
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
            <HeartRateGraph />
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                top: 50,
                justifyContent: "space-between",
                gap: 50,
              }}
            >
              <View>
                <Text style={styles.heartRateValue}>Heart Rate</Text>
                {/* <Text style={styles.heartRateData}>78 BPM</Text> */}
              </View>
              <LinearGradient
                colors={["#EEA4CE", "#C58BF2"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.viewMoreButton}
              >
                <TouchableOpacity>
                  <Text style={styles.timeAgo}>3 mins ago</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>

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
    marginBottom: Spacing.padding.lg,
  },
  greetingText: {
    fontSize: 16,
    color: Colors.text.secondary,
    fontFamily: "PoppinsRegular",
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
    flexDirection: "row",
  },
  bmiTitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: "PoppinsRegular",
  },
  bmiSubtitle: {
    color: "#ffffff",
    fontSize: 14,
    marginVertical: 5,
    fontFamily: "PoppinsRegular",
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
    fontFamily: "PoppinsRegular",
    color: Colors.ui.secondary,
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
    fontFamily: "PoppinsRegular",
  },
  activityStatus: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 15,
    fontFamily: "PoppinsBold",
  },
  heartRateContainer: {
    // flexDirection: "row",
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
    fontFamily: "PoppinsRegular",
  },
  heartRateData: {
    fontSize: 24,
    fontFamily: "PoppinsRegular",
    color: "#4A80FF",
  },
  timeAgo: {
    fontSize: 12,
    color: "#ffffff",
    fontFamily: "PoppinsRegular",
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
    fontFamily: "PoppinsRegular",
  },
  cardValue: {
    fontSize: 16,
    fontFamily: "PoppinsRegular",
    color: "#9AC4FF",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#AAA",
    fontFamily: "PoppinsRegular",
  },
});
