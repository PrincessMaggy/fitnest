import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRef, useContext, useEffect } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import PagerView from "react-native-pager-view";
import { AuthenticationContext } from "../context/AuthenticationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GoalScreen from "@/components/goalscreen.component";

export default function GoalsScreens() {
  const navigation: any = useNavigation();

  const pagerRef = useRef<PagerView | null>(null);
  const { setIsFirstTimeUser, isFirstTimeUser } = useContext(
    AuthenticationContext
  );

  const imageSources = [
    require("../assets/images/shape.png"),
    require("../assets/images/tone.png"),
    require("../assets/images/fat.png"),
  ];

  const titles = ["Improve Shape", "Lean & Tone", "Lose a Fat"];
  const heading = [
    "What is your goal ?",
    "What is your goal ?",
    "What is your goal ?",
  ];
  const subheading = [
    "It will help us to choose a best program for you",
    "It will help us to choose a best program for you",
    "It will help us to choose a best program for you",
  ];

  const stories = [
    "I have a low amount of body fat and need / want to build more muscle",
    "I’m “skinny fat”.I look thin but have no shape. I want to add learn muscle in the right way",
    "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass",
  ];

  const handleNext = async (index: number) => {
    if (index === 2) {
      setIsFirstTimeUser(false);
      await AsyncStorage.setItem(
        "fitnessX-FirstTimeUser",
        JSON.stringify("Not new")
      );
      navigation.navigate("loginscreen");
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
        paddingTop: 30,
      }}
    >
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <PagerView style={styles.pagerView} initialPage={0} ref={pagerRef}>
        {[...Array(3)].map((_, index) => (
          <View key={index}>
            <GoalScreen
              imageSource={imageSources[index]}
              heading={heading[index]}
              subheading={subheading[index]}
              title={titles[index]}
              story={stories[index]}
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
  backButton: {
    position: "absolute",
    top: 80,
    left: 20,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});
