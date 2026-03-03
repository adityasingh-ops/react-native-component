import { ProductType } from "@/types/product";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type props = {
  item: ProductType;
};
export default function ProductList({ item }: props) {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.secondaryText}>{item.id}</Text>
        <Text style={styles.mainText}>{item.title}</Text>
      </View>
      <Text style={styles.secondaryText}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "#C0E0E0",
  },
  mainText: {
    fontSize: 14,
    fontWeight: "medium",
  },
  secondaryText: {
    fontSize: 10,
    color: "grey",
    marginTop: 6,
  },
});
