import { View, Text, TextInput } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={{
          fontSize: 18,
          backgroundColor: "#7676801F",
          paddingHorizontal: 12,
          paddingVertical: 10,
          // marginHorizontal: 10,
          marginVertical: 15,
          borderRadius: 10,
        }}
        placeholderTextColor="#3C3C4399"
      />
    </View>
  );
};

export default SearchBar;
