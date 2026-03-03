import ProductList from "@/components/home/product_list";
import useProduct from "@/Hooks/useProduct";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList, 
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function list2() {
  const { fetchProduct, data, isLoading, hasMore } = useProduct();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  useEffect(() => {
    fetchProduct();
  }, []);   
  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchProduct(true)
    setTimeout(() => {
      setIsRefreshing(false);   
    }, 900);
  };
  return (  
    <View style={styles.mainView}>
      <Text style={styles.mainText}>FlatList2</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <ProductList item={item} />}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          onEndReachedThreshold={0.3}
          onEndReached={() => {
            !isLoading && hasMore && fetchProduct();
          }} 
          ListFooterComponent={isLoading ? <ActivityIndicator /> : null} 
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
  mainText: {
    fontSize: 18,
    marginVertical: 6,
    fontWeight: "bold",
  },
});
