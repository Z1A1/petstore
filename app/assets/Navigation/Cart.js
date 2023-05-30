import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";

import { useState } from "react";

export function Cart({ route }) {
  const [search, setSearch] = useState("");
  const searching = (text) => {
    setSearch(text);
  };
  const { cartItems } = route.params;

  const renderItem = ({ item }) => {
    return <Text>{item}</Text>;
  };
  const filteredData = cartItems.filter((item) => item.includes(search));

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.searchBar}
        onChangeText={setSearch}
        value={search}
        placeholder="Search..."
      />
      <View style={{ flex: 1, margin: 20, backgroundColor: "#90EE90" }}>
        <FlatList data={filteredData} renderItem={renderItem} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F67C8E",
  },
  container1: {
    marginTop: 300,
    height: 500,
    left: 55,
    borderRadius: 25,

    width: 300,

    backgroundColor: "white",
  },
  container2: {
    flex: 1,
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 60,
    borderRadius: 25,

    backgroundColor: "white",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: "red",
  },
  input1: {
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: "red",
    backgroundColor: "#F67C8E",
  },
  searchBar: {
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
  },
  container3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  Header: {
    fontSize: 25,
  },
  textinput: {
    marginTop: 15,
    justifyContent: "space-between",
  },
});
