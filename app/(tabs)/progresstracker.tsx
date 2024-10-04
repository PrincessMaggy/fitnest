import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Spacing } from "@/constants/Spacing";
import HeaderComponent from "@/components/header.component";
import Gallery from "@/components/gallery.component";
import ReminderComponent from "@/components/reminder.component";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function ProgressTracker() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const [showReminder, setShowReminder] = useState(true);

  const clearReminder = () => {
    setShowReminder(false);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.contentContainer}
        extraScrollHeight={70}
        enableOnAndroid={true}
      >
        <HeaderComponent title="Progress Photo" />
        {showReminder && (
          <ReminderComponent
            title="Reminder!"
            description="Next Photos Fall On July 08"
            onClear={clearReminder}
          />
        )}

        {/* Track Progress Section */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Track Your Progress Each Month With Photo
            </Text>

            <TouchableOpacity>
              <LinearGradient
                colors={[Colors.brand.grad3, Colors.brand.grad4]}
                style={styles.learnMoreButton}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.learnMoreText}>Learn More</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Image
            source={require("@/assets/images/track_progress.png")}
            style={styles.cardImage}
          />
        </View>

        {/* Compare Photo Button */}
        <View style={styles.compareContainer}>
          <Text style={styles.compareTitle}>Compare my Photo</Text>

          <TouchableOpacity>
            <LinearGradient
              colors={[Colors.brand.grad3, Colors.brand.grad4]}
              style={styles.compareButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.compareButtonText}>Compare</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Gallery Section */}
        <View style={styles.gallerySection}>
          <Text style={styles.galleryTitle}>Gallery</Text>
          <Text style={styles.seeMoreText}>See more</Text>
          {/* Gallery Row 1 */}
        </View>
        <Gallery />
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
  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  cardContainer: {
    marginVertical: 10,
    flexDirection: "row",
    backgroundColor: "#E9F0FF",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: "50%",
    flexDirection: "column",
    gap: 15,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: "contain",
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: Colors.brand.headercolor,
  },
  learnMoreButton: {
    backgroundColor: Colors.brand.grad3,
    borderRadius: 20,
    paddingVertical: 10,
    width: "60%",
    paddingHorizontal: 20,
  },
  learnMoreText: {
    fontSize: 12,
    fontFamily: "PoppinsRegular",
    color: "#fff",
  },
  compareContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 15,
    backgroundColor: "#E9F0FF",
    borderRadius: 15,
  },
  compareTitle: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
  },
  compareButton: {
    backgroundColor: Colors.brand.grad3,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  compareButtonText: {
    fontSize: 14,
    fontFamily: "PoppinsRegular",
    color: "#fff",
  },
  gallerySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    padding: 15,
  },
  galleryTitle: {
    fontSize: Spacing.fontsizes.md,
    marginBottom: 10,
    fontFamily: "PoppinsBold",
  },
  seeMoreText: {
    color: Colors.text.secondary,
  },
  galleryRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  galleryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
});
