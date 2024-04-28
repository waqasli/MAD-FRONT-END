import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState } from "react";
export default function ColorScreen() {
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`; //in return whole work will be about javascript
  };
  const [colors, setColors] = useState([]);
  const heightWidthRandomize = () => {
    return Math.floor(Math.random() * 100);
  };
  const [position, setPosition] = useState([
    "center",
    "flex-start",
    "flex-end",
  ]);
  const randomPosition = () => {
    const random = Math.floor(Math.random() * 3);
    return position[random];
  };
  return (
    <View>
      <Text>Generate Random Colors</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: heightWidthRandomize(),
                width: heightWidthRandomize(),
                backgroundColor: item,
                alignSelf: randomPosition(),
              }}
            ></View>
          );
        }}
      />
      <View
        style={{ height: 100, width: 100, backgroundColor: "black" }}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({});
