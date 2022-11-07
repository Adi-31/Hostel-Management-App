import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.conatiner}>
      <TextInput
        placeholder="🔍 Porotta, Dosa ..."
        style={styles.textinput}
        placeholderTextColor="#3C3C4399"
      />
    </View>
  );
};

export default SearchBar;

const styles=StyleSheet.create({
  conatiner :{ width: "100%" } ,
  textinput : {
    fontSize: 18,
    backgroundColor: "#7676801F",
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 15,
    borderRadius: 10,
  }
})
