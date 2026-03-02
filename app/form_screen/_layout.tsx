import AppHeader from "@/components/common/header";
import { Stack } from "expo-router";
import React from "react";

export default function ScreenLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <AppHeader title={"SignUp"} ishome={true}/>,
      }}
    >
      <Stack.Screen name="signup1" />
      <Stack.Screen name="signup2" />
      <Stack.Screen name="signup3" />
      <Stack.Screen name="signup4" />
      <Stack.Screen name="signup5" />
    </Stack>
  );
}
