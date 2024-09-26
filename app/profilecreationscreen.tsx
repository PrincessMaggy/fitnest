import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useState, useRef } from "react";
import { Spacing } from "@/constants/Spacing";
import { Colors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dropdown } from "react-native-element-dropdown";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

export default function ProfileCreationScreen() {
  const navigation: any = useNavigation();

  const [gender, setGender] = useState([
    {
      label: "Female",
      gender: "Female",
    },
    {
      label: "Male",
      gender: "Male",
    },
  ]);
  const [dob, setDOB] = useState<Date>(new Date());
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      setDOB(selectedDate);
    }
    setShow(Platform.OS === "ios");
  };

  const showDatepicker = () => {
    setShow(true);
  };
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
        }}
        extraScrollHeight={70}
        enableOnAndroid={true}
      >
        <ScrollView>
          <View style={styles.container}>
            <Image
              style={styles.banner}
              source={require("../assets/images/MaskGroup.png")}
            />
            <Text
              style={{
                fontFamily: "PoppinsBold",
                color: Colors.brand.headercolor,
                fontSize: Spacing.fontsizes.md,
              }}
            >
              Let's complete your profile
            </Text>
            <Text
              style={{
                fontFamily: "PoppinsRegular",
                color: Colors.text.primary,
                marginBottom: Spacing.padding.lg,
              }}
            >
              It will help us to know more about you!
            </Text>
            <View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/user2.png")}
                  style={styles.icon}
                />
                <Dropdown
                  style={styles.dropdown}
                  data={gender}
                  maxHeight={300}
                  labelField="label"
                  valueField="gender"
                  placeholderStyle={{
                    color: Colors.text.primary,
                    fontSize: 14,
                  }}
                  placeholder="Choose Gender"
                  containerStyle={{
                    borderRadius: 15,
                  }}
                  itemTextStyle={{
                    color: Colors.text.primary,
                    fontFamily: "PoppinsRegular",
                    fontSize: 14,
                  }}
                  itemContainerStyle={{
                    padding: Spacing.padding.sm / 2,
                  }}
                  value={selectedGender}
                  onChange={(item) => {
                    setSelectedGender(item.gender);
                  }}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  source={require("../assets/images/Calendar.png")}
                  style={styles.icon}
                />
                <TouchableOpacity onPress={showDatepicker}>
                  {!show && (
                    <Text
                      style={{
                        color: Colors.text.primary,
                        padding: Spacing.padding.md,
                        fontFamily: "PoppinsRegular",
                        marginLeft: Spacing.padding.lg,
                      }}
                    >
                      Date of Birth
                    </Text>
                  )}
                  {show && (
                    <DateTimePicker
                      value={dob}
                      mode="date"
                      display="default"
                      onChange={onChange}
                      style={{
                        padding: Spacing.padding.sm,
                        marginLeft: Spacing.padding.sm,
                        alignSelf: "flex-start",
                      }}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: Dimensions.get("window").width / 1.2,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: Spacing.padding.sm,
                }}
              >
                <View style={styles.inputContainer2}>
                  <Image
                    source={require("../assets/images/weight-scale.png")}
                    style={styles.icon}
                  />
                  <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Your Weight"
                    style={styles.input2}
                    keyboardType="numeric"
                    maxLength={5}
                    placeholderTextColor={Colors.text.primary}
                  />
                </View>
                <View style={styles.subbtnContainer}>
                  <Text style={styles.subbtn}>KG</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  width: Dimensions.get("window").width / 1.2,
                  alignItems: "center",
                  height: 70,
                  justifyContent: "space-between",
                  marginBottom: Spacing.padding.sm,
                }}
              >
                <View style={styles.inputContainer2}>
                  <Image
                    source={require("../assets/images/Swap.png")}
                    style={styles.icon}
                  />
                  <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Your Height"
                    style={styles.input2}
                    keyboardType="numeric"
                    maxLength={5}
                    placeholderTextColor={Colors.text.primary}
                  />
                </View>
                <View style={styles.subbtnContainer}>
                  <Text style={styles.subbtn}>CM</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("goalsscreens");
              }}
            >
              <LinearGradient
                colors={["#9AC4FF", "#6B82FD"]}
                style={styles.background}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.button}>Next </Text>
                <Image
                  source={require("../assets/images/ArrowRight.png")}
                  style={styles.arrow}
                />
              </LinearGradient>
            </TouchableOpacity>
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
  },
  container: {
    marginTop: Spacing.padding.lg,
    alignItems: "center",
    gap: Spacing.padding.md,
  },
  inputContainer: {
    position: "relative",
    marginBottom: Spacing.padding.md,
    backgroundColor: Colors.bg.primary,
    borderRadius: 15,
  },
  banner: {
    width: Dimensions.get("window").width / 1.5,
    height: Dimensions.get("window").height / 3,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  input: {
    height: 50,
    paddingHorizontal: 40,
    width: Dimensions.get("window").width / 1.4,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  input2: {
    height: 50,
    paddingHorizontal: 40,
    width: Dimensions.get("window").width / 1.5,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  inputContainer2: {
    position: "relative",
    backgroundColor: Colors.bg.primary,
    borderRadius: 15,
    width: Dimensions.get("window").width / 1.5,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 15,
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  button: {
    alignItems: "center",
    color: Colors.text.inverse,
    fontFamily: "PoppinsBold",
  },
  arrow: { width: 18, height: 18, resizeMode: "contain" },
  background: {
    flexDirection: "row",
    width: Dimensions.get("window").width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    padding: Spacing.padding.md,
    gap: 10,
    borderRadius: 50,
  },
  dropdown: {
    height: 50,
    width: Dimensions.get("window").width / 1.5,
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
    zIndex: 10,
    fontSize: 14,
  },
  subbtn: {
    color: "#ffffff",
  },
  subbtnContainer: {
    padding: Spacing.padding.md,
    borderRadius: 15,
    backgroundColor: Colors.brand.grad1,
    alignSelf: "center",
  },
});
