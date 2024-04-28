import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Image")}
      >
        <Text style={styles.textStyle}>Go to Image Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Counter")}
      >
        <Text style={styles.textStyle}>Go to Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Text")}
      >
        <Text style={styles.textStyle}>Go to Text Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Flat")}
      >
        <Text style={styles.textStyle}>Go to Flat Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("ColorScreen")}
      >
        <Text style={styles.textStyle}>Go to Color Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Square")}
      >
        <Text style={styles.textStyle}>Go to Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("SearchScreen")}
      >
        <Text style={styles.textStyle}>Go to SearchBar Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("FormScreen")}
      >
        <Text style={styles.textStyle}>Go to Form Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("WeatherScreen")}
      >
        <Text style={styles.textStyle}>Go to Weather Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={styles.textStyle}>Go to Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.textStyle}>Go to  Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewStyle}
        onPress={() => navigation.navigate("Q1")}
      >
        <Text style={styles.textStyle}>Go to  Q1</Text>

        
      </TouchableOpacity>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 12,
    marginBottom: 10, // Added margin bottom for spacing between TouchableOpacity components
  },
  textStyle: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
