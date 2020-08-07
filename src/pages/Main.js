import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Text,
  FlatList,
} from "react-native";
import Header from "../components/Header";

export default function Main({ navigation }) {
  const [peoples, setPeoples] = useState([]);
  function loadPeoples() {
    axios
      .get("https://randomuser.me/api/?nat=br&results=10")
      .then((response) => {
        setPeoples(response.data.results);
      });
  }

  useEffect(() => {
    loadPeoples();
  }, []);

  function renderItem({ item }) {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate("Detail", { item })}
        underlayColor="#ccc"
      >
        <View style={styles.containerInfo}>
          <Image source={{ uri: item.picture.large }} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name.first}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={peoples}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  info: {
    marginLeft: 20,
  },

  img: {
    width: 82,
    height: 82,
    borderRadius: 32,
  },
  name: { color: "#131313", fontWeight: "bold", fontSize: 20 },
  email: { color: "#2675EC", fontWeight: "bold" },
});
