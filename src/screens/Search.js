import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchScreen() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSearch} style={styles.iconContainer}>
        <Feather name={showSearch ? "x" : "search"} size={24} color="black" />
      </TouchableOpacity>
      {showSearch && (
        <TextInput
          style={styles.input}
          placeholder="Search here"
          autoFocus={true}
          placeholderTextColor="#666"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },
  iconContainer: {
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'yellow', 
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#444',
    fontSize: 20,
  },
});
