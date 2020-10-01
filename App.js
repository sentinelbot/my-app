import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}> It's time to have Fun!' </Text>
      </View>
      <View style={styles.body}>
        <Text> lorem lipsum </Text>
        <Text> lorem lipsum </Text>
        <Text> lorem lipsum </Text>
        <Text> lorem lipsum </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  header: { backgroundColor: "pink", padding: 20 },
  body: { backgroundColor: "yellow" },
  boldText: { fontWeight: "bold" },
});
