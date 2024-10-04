import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "@/constants/Colors";
import HeaderComponent from "@/components/header.component";
import { Spacing } from "@/constants/Spacing";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LatestActivity from "@/components/latestactivity.component";
import { BarChart } from "react-native-gifted-charts";

const screenWidth = Dimensions.get("window").width;
const data = [
  { value: 50, label: "Sun" },
  { value: 20, label: "Mon" },
  { value: 70, label: "Tue" },
  { value: 80, label: "Wed" },
  { value: 40, label: "Thu" },
  { value: 60, label: "Fri" },
  { value: 90, label: "Sat" },
];

const getBarColors = (index: number) => {
  return index % 2 === 0 ? Colors.brand.grad2 : Colors.brand.grad4;
};

export default function ActivityTracker() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);

  const imageSources = [
    require("@/assets/images/drink.png"),
    require("@/assets/images/snack.png"),
  ];

  const titles = ["Drinking 300ml Water", "Eat Snack (Fitbar)"];
  const timeline = ["About 1 minute ago", "About 3 hours ago"];

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
        <View>
          {/* Header */}
          <HeaderComponent title="Activity Tracker" />

          {/* Today Target */}
          <View style={styles.targetContainer}>
            <View style={styles.targetTitle}>
              <Text style={styles.targetLabel}>Today's Target</Text>
              <Image
                style={styles.addbtn}
                source={require("@/assets/images/add.png")}
              />
            </View>
            <View style={styles.targetBoxes}>
              <View style={styles.targetBox}>
                <Image
                  style={styles.targetimg}
                  source={require("@/assets/images/glass.png")}
                />
                <View>
                  <Text style={styles.targetValue}>8L</Text>
                  <Text style={styles.targetText}>Water Intake</Text>
                </View>
              </View>
              <View style={styles.targetBox}>
                <Image
                  style={styles.targetimg}
                  source={require("@/assets/images/boots.png")}
                />
                <View>
                  <Text style={styles.targetValue}>2400</Text>
                  <Text style={styles.targetText}>Foot Steps</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Activity Progress */}

          <View style={styles.activityProgress}>
            <Text style={styles.latestActivityLabel}>Activity Progress</Text>
            <TouchableOpacity>
              <LinearGradient
                colors={[Colors.brand.grad3, Colors.brand.grad4]}
                style={styles.checkButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.checkButtonText}>Weekly</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 15,
              shadowColor: "#000",
              backgroundColor: "#fff",
              shadowOffset: { width: 0, height: 2 },
              borderRadius: 15,
              shadowOpacity: 0.1,
              shadowRadius: 3,
              paddingBottom: 20,
              elevation: 5,
            }}
          >
            <BarChart
              data={data.map((item, index) => ({
                ...item,
                frontColor: getBarColors(index),
              }))}
              width={screenWidth - 100}
              height={220}
              barWidth={22}
              spacing={22}
              noOfSections={4}
              yAxisThickness={0}
              yAxisLabelTexts={[]}
              xAxisThickness={0}
              yAxisTextStyle={{
                color: "#fff",
              }}
              hideRules
              showGradient
              gradientColor={(Colors.brand.grad1, Colors.brand.grad3)}
              initialSpacing={15}
              roundedTop
              barBorderRadius={10}
              xAxisLabelTextStyle={{
                color: Colors.text.primary,
                fontSize: 12,
                fontFamily: "PoppinsRegular",
              }}
            />
          </View>

          {/* Latest Activity */}
          <View style={styles.latestActivity}>
            <Text style={styles.latestActivityLabel}>Latest Activity</Text>
            <TouchableOpacity>
              <Text>See more</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 15, marginRight: 15 }}>
            {[...Array(2)].map((_, index) => (
              <View key={index}>
                <LatestActivity
                  imageSource={imageSources[index]}
                  title={titles[index]}
                  timeline={timeline[index]}
                />
              </View>
            ))}
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
  targetContainer: {
    marginBottom: 20,
    backgroundColor: Colors.bg.light,
    padding: 20,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  targetimg: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  targetLabel: {
    fontSize: Spacing.fontsizes.md,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addbtn: {
    height: 20,
    width: 20,
  },
  targetTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    marginBottom: 10,
  },
  targetBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  targetBox: {
    flexDirection: "row",
    backgroundColor: Colors.bg.primary,
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    gap: Spacing.padding.md,
  },
  targetValue: {
    fontSize: Spacing.fontsizes.md,
    fontWeight: "bold",
    color: Colors.brand.primary,
  },
  targetText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.text.secondary,
  },

  latestActivityLabel: {
    fontSize: Spacing.fontsizes.md,
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkButton: {
    backgroundColor: Colors.brand.grad3,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  checkButtonText: {
    color: "#FFF",
    fontSize: 12,
    fontFamily: "PoppinsRegular",
  },
  activityProgress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    padding: 5,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  latestActivity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    padding: 15,
  },
});
