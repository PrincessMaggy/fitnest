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
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation: any = useNavigation();
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
          <View style={{ flexDirection: "column", gap: Spacing.padding.sm }}>
            <Text style={styles.greetingText}>Welcome Back, </Text>
            <Text style={styles.userName}>{user?.fullName}</Text>
          </View>
          <View style={styles.notificationIcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate("notificationsscreen")}
            >
              <Image
                style={styles.notificationIcon}
                source={require("../../assets/images/Notificationicon.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BMI Card Section */}
        <LinearGradient
          colors={[Colors.brand.grad3, Colors.brand.grad4]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bmiCard}
        >
          <View>
            <Text style={styles.bmiTitle}>BMI (Body Mass Index)</Text>
            <Text style={styles.bmiSubtitle}>You have a normal weight</Text>
            <LinearGradient
              colors={[Colors.brand.grad2, Colors.brand.grad1]}
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
              colors={[Colors.brand.grad3, Colors.brand.grad4]}
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
                top: Spacing.padding.xxl,
                justifyContent: "space-between",
                gap: Spacing.padding.xxl,
              }}
            >
              <View>
                <Text style={styles.heartRateValue}>Heart Rate</Text>
                {/* <Text style={styles.heartRateData}>78 BPM</Text> */}
              </View>
              <LinearGradient
                colors={[Colors.brand.grad2, Colors.brand.grad1]}
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
    paddingTop: Spacing.padding.xl,
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
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
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
    backgroundColor: Colors.bg.light,
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
    backgroundColor: Colors.brand.grad3,
    borderRadius: 20,
    paddingVertical: 7,
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
    elevation: 5,
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
