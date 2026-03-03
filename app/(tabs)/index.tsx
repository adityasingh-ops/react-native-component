import ScreenList from "@/components/home/screen_list";
import { RelativePathString } from "expo-router";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const ScreensJson = [
  {
    id: 1,
    name: "SignUp Form With Validation On Button",
    link: "/form_screen/signup1",
  },
  {
    id: 2,
    name: "SignUp Form With validation On EachField",
    link: "/form_screen/signup2",
  },
  {
    id: 3,
    name: "SignUp Form With api and async validation",
    link: "/form_screen/signup3",
  },
  {
    id: 4,
    name: "SignUp Form with good ux and microinteraction",
    link: "/form_screen/signup4",
  },
  {
    id: 5,
    name: "Simple list only rendring data",
    link: "/list_screen/list1",
  },
  {
    id: 6,
    name: "Simple list only rendring data",
    link: "/list_screen/list2",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.mainView}>
      <FlatList
        data={ScreensJson}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ScreenList name={item.name} link={item.link as RelativePathString} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 6,
    margin: 8,
  },
});
