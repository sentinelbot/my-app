import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("isaac");
  const handleClick = () => {
    setName("jojo");
    setPerson({ name: "esther", age: "16" });
  };
  const [person, setPerson] = useState({ name: "gifty", age: 14 });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> It's time to have Fun!' </Text>
      </View>
      <View style={styles.body}>
        <Text> My name is {name} </Text>
        <Text>
          My name is {person.name} and his age is {person.age}
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Update name" onPress={handleClick} />
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
  header: { backgroundColor: "red", padding: 20 },
  body: { backgroundColor: "yellow", marginTop: 20 },
  boldText: { fontWeight: "bold" },
  btnContainer: { marginTop: 20 },
});
