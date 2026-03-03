import AppHeader from "@/components/common/header";
import { Stack, useRouter } from "expo-router";
import React, { useCallback } from "react";

export default function ListLayout() {
  const router = useRouter();

  const renderHeader = useCallback(
    () => (
      <AppHeader title={"Lists"} ishome={false} onBackPress={router.back} />
    ),
    [router],
  );
  return (
    <Stack>
      <Stack.Screen
        name="list1"
        options={{
          title: "list1",
          header: renderHeader,
        }}
      />
      <Stack.Screen
        name="list2"
        options={{
          title: "list2",
          header: renderHeader
        }}
      />
      <Stack.Screen
        name="list3"
        options={{
          title: "list3",
          header: renderHeader
        }}
      />
    </Stack>
  );
}
