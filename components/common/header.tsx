import { Header } from "@/types/app_header";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function AppHeader({ title, ishome }: Header) {
  const router = useNavigation();
  return (
    <View style={styles.headerStyle}>
      {ishome && (
        <MaterialIcons
          onPress={() => router.goBack()}
          style={styles.icon}
          name="arrow-back-ios-new"
          size={22}
        />
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    padding: 6,
    height: 100,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  icon: {
    position: "absolute",
    left: 24,
    bottom: 12,
  },
});
