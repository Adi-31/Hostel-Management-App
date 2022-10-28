<View style={{ flex: 1, backgroundColor: "red", padding: 10 }}>
  <View
    style={{
      backgroundColor: "white",
      borderRadius: 10,
      marginBottom: 15,
      padding: 10,
    }}
  >
    <Text>Search Bar</Text>
  </View>
  <View style={{ backgroundColor: "yellow", padding: 10 }}>
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      ListHeaderComponent={header}
      //   style={{ marginHorizontal: 20 }}
    />
    <FlatList
      data={menu}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      ListHeaderComponent={header}
      // style={{ backgroundColor: "gray", maxHeight: "85%" }}
    />
  </View>
</View>;
