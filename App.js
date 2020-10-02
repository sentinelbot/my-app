import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("isaac");
  const [age, setAge] = useState(12);

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>Enter name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g John Case"
          onChangeText={(name) => {
            setName(name);
          }}
        />
        <Text>Enter Age</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g 78"
          keyboardType="numeric"
          onChangeText={(age) => {
            setAge(age);
          }}
        />
        <Text>
          My name is {name} and age is {age}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#369",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 20,
  },
});
