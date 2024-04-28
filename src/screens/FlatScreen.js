import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";
export default function FlatScreen() {
  const friends = [
    { name: "Muhammad", age: 22 },
    { name: "Ali", age: 20 },
    { name: "Umar", age: 21 },
    { name: "Usman", age: 23 }, //first index value of array friends
  ];
  return (
    //in return frontend part occurs that we want to show on screen
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        //remember the syntax of render item and on press
        return (
          <Text style={styles.textStyle}>
            {item.name} and {item.age}
          </Text>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    fontSize: 20,
    color: "rgb(100,5,6)",
  },
});
