import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
} from "react-native";
import { useRef, useContext } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import OnboardingScreen from "@/components/onboardingscreen.component";
import PagerView from "react-native-pager-view";
import { AuthenticationContext } from "../context/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingScreens() {
  const pagerRef = useRef<PagerView | null>(null);
  const { setIsFirstTimeUser } = useContext(AuthenticationContext);

  const imageSources = [
    require("../assets/images/track_goal.png"),
    require("../assets/images/get_burn.png"),
    require("../assets/images/eat_well.png"),
    require("../assets/images/improve_sleep.png"),
  ];

  const iconSources = [
    require("../assets/images/Button1.png"),
    require("../assets/images/Button2.png"),
    require("../assets/images/Button3.png"),
    require("../assets/images/Button4.png"),
  ];

  const titles = [
    "Track Your Goal",
    "Get Burn",
    "Eat Well",
    "Improve Sleep Quality",
  ];

  const stories = [
    "Don't worry if you have trouble determining your goals, we can help you track them.",
    "Let’s keep burning to achieve your goals; it hurts only temporarily.",
    "Let's start a healthy lifestyle with us; healthy eating is fun.",
    "Improve the quality of your sleep with us; good sleep brings a good mood.",
  ];

  const handleNext = (index: number) => {
    if (index === 3) {
      setIsFirstTimeUser(true);
      AsyncStorage.setItem("fitnessX-FirstTimeUser", JSON.stringify(true));
    } else {
      if (pagerRef.current) {
        pagerRef.current.setPage(index + 1);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Spacing.padding.sm,
      }}
    >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <PagerView style={styles.pagerView} initialPage={0} ref={pagerRef}>
        {[...Array(4)].map((_, index) => (
          <View key={index}>
            <OnboardingScreen
              imageSource={imageSources[index]}
              title={titles[index]}
              story={stories[index]}
              iconSource={iconSources[index]}
              onNext={() => handleNext(index)}
            />
          </View>
        ))}
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get("window").width / 1.3,
    resizeMode: "contain",
    alignSelf: "center",
  },
  pagerView: {
    flex: 1,
  },
  container: {
    height: Dimensions.get("window").height / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: Colors.brand.primary,
  },
});
