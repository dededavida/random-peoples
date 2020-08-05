import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>RandomPeople</Text>
      <View style={styles.indicador} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "stretch", justifyContent: "center" },
  titulo: {
    color: "#2675EC",
    fontSize: 30,
    fontWeight: "bold",
    padding: 30,
    textAlign: "center",
  },
  indicador: {
    backgroundColor: "#ccc",
    width: "100%",
    padding: 2,
  },
});
