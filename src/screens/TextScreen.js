import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
export default function TextScreen() {
  const [name, setName] = useState(""); //as name string so used ''
  return (
    <View>
      <Text> Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text> Written Text is: {name} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
  },
});
