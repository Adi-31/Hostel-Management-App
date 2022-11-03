import { View, Text, TextInput } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder="Porotta, Dosa ..."
        style={{
          fontSize: 18,
          backgroundColor: "gray",
          paddingHorizontal: 12,
          paddingVertical: 10,
          // marginHorizontal: 10,
          marginVertical: 15,
          borderRadius: 10,
          opacity: 0.7,
        }}
        placeholderTextColor="black"
      />
    </View>
  );
};

export default SearchBar;
