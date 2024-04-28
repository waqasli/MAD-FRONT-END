import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = (props) => {
  //UseState Hook
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const handleSearchIconPress = () => {
    setIsSearchEnabled(true);
  };

  return (
    <>
      <Text style={styles.searchLabel}>Find what you're looking for</Text>
      <View style={styles.container}>
        {isSearchEnabled ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Search Here..."
            value={props.term}
            onChangeText={props.onTermChange}
            onSubmitEditing={props.onTermSubmit}
          />
        ) : (
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={handleSearchIconPress}
          >
            <Feather name="search" size={24} color="#333" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  searchIcon: {
    padding: 8,
  },
  searchLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});
