import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => submitHandler(text)}
      >
        <Text style={styles.title}> add todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "coral",
  },
  title: {
    textTransform: "uppercase",
    color: "#fff",
    textAlign: "center",
  },
});
