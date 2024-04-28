import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
// import SearchBar from "../components/SearchBar";
// import ResultList from "../components/ResultList";
import { Feather } from "@expo/vector-icons";
import yelp from "../api/yelp.js";

export const SearchScreen2 = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "Newyork",
      },
    });
    setResults(response.data.businesses);
  };
  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <View style={styles.background}>
        <Feather style={styles.iconStyle} name="search" />

        <TextInput
          placeholder="Search"
          value={term}
          onChangeText={(newTerm) => setTerm(newTerm)}
          onSubmitEditing={() => searchApi()}
        />
      </View>
      <Text>We have found {results.length} restaurants</Text>
      <Text>Cost Effective</Text>
      <FlatList
        horizontal
        data={filterByPrice("$")}
        renderItem={({ item }) => {
          console.log();
          return (
            <Text>
              {item.name} and {item.price} ||{" "}
            </Text>
          );
        }}
      />
      <Text>Bit Pricier</Text>
      <FlatList
        horizontal
        data={filterByPrice("$$")}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} and {item.price} ||{" "}
            </Text>
          );
        }}
      />

      <Text>Big Spender</Text>
      <FlatList
        horizontal
        data={filterByPrice("$$$")}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} and {item.price} ||{" "}
            </Text>
          );
        }}
      />
      <Text>Burger Bachay</Text>
      <FlatList
        horizontal
        data={filterByPrice("$$$$")}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} and {item.price} ||{" "}
            </Text>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#CCCCCC",
    flexDirection: "row",
    borderRadius: 15,
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 20,
    alignSelf: "center",
  },
});
