import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function CounterScreen() {
  const button1text = "Increase";
  const button2text = "Decrease";
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title={button1text}
        onPress={() => {
          setCounter(counter + 1);
        }}
      ></Button>
      <Button
        title={button2text}
        onPress={() => {
          setCounter(counter - 1);
        }}
      ></Button>
      <Text>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
