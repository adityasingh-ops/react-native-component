import ProductList from "@/components/home/product_list";
import useProduct from "@/Hooks/useProduct";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function list1() {
  const { fetchProduct, data, } = useProduct();
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <ProductList item={item} />}    
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: 6,
    padding: 12,
  },
  mainText:{
    fontSize:18,
    marginVertical:6,
    fontWeight:'bold'
  }
});
