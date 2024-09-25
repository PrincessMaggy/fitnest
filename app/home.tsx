import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRef } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Home() {
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);

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
          <Text>HOMEPAGE</Text>
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
});
