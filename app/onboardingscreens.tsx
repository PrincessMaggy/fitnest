import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
} from "react-native";
import { useRef, useContext, useEffect } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import OnboardingScreen from "@/components/onboardingscreen.component";
import PagerView from "react-native-pager-view";
import { AuthenticationContext } from "../context/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function OnboardingScreens() {
  const navigation: any = useNavigation();

  const pagerRef = useRef<PagerView | null>(null);
  const { setIsFirstTimeUser, isFirstTimeUser } = useContext(
    AuthenticationContext
  );

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
    "Don't worry if you have trouble determining your goals, We can help you determine and track your goals",
    "Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever",
    "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
    "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning",
  ];

  const handleNext = async (index: number) => {
    if (index === 3) {
      setIsFirstTimeUser(false);
      await AsyncStorage.setItem(
        "fitnessX-FirstTimeUser",
        JSON.stringify("Not new")
      );
      navigation.navigate("signupscreen");
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
