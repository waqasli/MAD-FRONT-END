import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ResultList(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <FlatList
        horizontal
        data={props.result}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} and {item.price} ||
            </Text>
          );
        }}
      />
    </View>
  );
}
