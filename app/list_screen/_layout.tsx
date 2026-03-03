import AppHeader from "@/components/common/header";
import { Stack } from "expo-router";
import React from "react";

export default function ListLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ navigation }) => (
          <AppHeader
            title={"Lists"}
            ishome={false}
            onBackPress={navigation.goBack}
          />
        ),
      }}
    >
      <Stack.Screen name="list1" options={{ title: "list1" }} />
    </Stack>
  );
}
