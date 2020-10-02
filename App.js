import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "buy coffee", id: "1" },
    { text: "buy laptop", id: "2" },
    { text: "buy shoe", id: "3" },
  ]);

  const presssHandler = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodo((prevTodos) => {
        return [{ text: text, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Oops!", "You can't add empty Todo");
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/**header */}
        <Header />
        <View style={styles.content}>
          {/**todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todo}
              renderItem={({ item }) => {
                return <TodoItem item={item} pressHandler={presssHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
  },
  content: {
    padding: 40,
  },
});
