import ProductList from "@/components/home/product_list";
import useDebounce from "@/Hooks/useDebounce";
import useProduct from "@/Hooks/useProduct";
import React, { useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function list3() {
  const { fetchProduct, data, isLoading, hasMore } = useProduct();
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { debounceValue, isloading: isSearching } = useDebounce(
    searchQuery,
    900,
  );
  useEffect(() => {
    fetchProduct();
  }, []);

  const filteredData = useMemo(() => {
    return (
      data.filter((item) =>
        item.title.toLowerCase().includes(debounceValue?.toLowerCase() || ""),
      ) 
    );
  },[data, debounceValue]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchProduct(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 900);
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainText}>FlatList2</Text>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search....."
        style={styles.searchBar}
      />
      <FlatList
      style={isSearching ? {opacity:0.4} : {opacity:1}}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <ProductList item={item} />}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        onEndReachedThreshold={0.1}
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
  searchBar: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "grey",
    padding: 8,
    margin: 6,
  },
});
