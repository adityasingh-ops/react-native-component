import AppHeader from "@/components/common/header";
import { Stack } from "expo-router";
import React from "react";

export default function ScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signup1"
        options={{
          header: ({ navigation }) => (
            <AppHeader
              title={"SignUp"}
              ishome={false}
              onBackPress={navigation.goBack}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup2"
        options={{
          header: ({ navigation }) => (
            <AppHeader
              title={"SignUp"}
              ishome={false}
              onBackPress={navigation.goBack}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup3"
        options={{
          header: ({ navigation }) => (
            <AppHeader
              title={"SignUp"}
              ishome={false}
              onBackPress={navigation.goBack}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup4"
        options={{
          header: ({ navigation }) => (
            <AppHeader
              title={"SignUp"}
              ishome={false}
              onBackPress={navigation.goBack}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup5"
        options={{
          header: ({ navigation }) => (
            <AppHeader
              title={"SignUp"}
              ishome={false}
              onBackPress={navigation.goBack}
            />
          ),
        }}
      />
    </Stack>
  );
}
