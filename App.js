import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "isaac", id: "1" },
    { name: "walter", id: "2" },
    { name: "dede", id: "3" },
    { name: "john", id: "4" },
    { name: "lily", id: "5" },
  ]);

  const clickHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <TouchableOpacity
              onPress={() => clickHandler(item.id)}
              style={styles.button}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* <ScrollView>
        {people.map((item) => (
          <View key={people.key} style={styles.list}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#777",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  list: {
    borderWidth: 1,
    borderColor: "#369",
    marginHorizontal: 20,
    padding: 8,
    marginTop: 80,
    fontSize: 24,
    backgroundColor: "pink",
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
  },
});
