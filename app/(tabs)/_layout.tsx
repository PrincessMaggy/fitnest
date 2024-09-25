import { Tabs } from "expo-router";
import React, { useContext, useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthenticationContext } from "@/context/AuthenticationContext";
import LaunchScreen from "../launchscreen";
import SignUpScreen from "../signupscreen";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAuthenticated, checkUserSession, isFirstTimeUser } = useContext(
    AuthenticationContext
  );
  useEffect(() => {
    checkUserSession();
  }, []);

  if (!isFirstTimeUser) {
    return <LaunchScreen />;
  }

  if (!isAuthenticated) {
    return <SignUpScreen />;
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
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
