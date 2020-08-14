import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.title}>Random Peoples</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#2675ec",
    fontSize: 30,
    fontWeight: "bold",
    padding: 30,
    textAlign: "center",
  },
  line: {
    backgroundColor: "#ccc",
    height: 2,
  },
});
