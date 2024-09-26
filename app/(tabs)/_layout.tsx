import { Tabs } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import LaunchScreen from "../launchscreen";
import SignUpScreen from "../signupscreen";
import LoginScreen from "../loginscreen";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, checkUserSession, isFirstTimeUser, navigateHome } =
    useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const run = async () => {
      await checkUserSession();
      setIsLoading(false);
    };
    run();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.brand.grad1} />
      </View>
    );
  }
  if (isFirstTimeUser) {
    return <LaunchScreen />;
  }

  if (!isAuthenticated && !navigateHome) {
    return <LoginScreen />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="activitytracker"
        options={{
          title: "Activity Tracker",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
