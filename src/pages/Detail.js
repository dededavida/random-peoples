import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Detail({ navigation, route }) {
  return (
    <View style={sytles.container}>
      <View style={sytles.header}>
        <Ionicons.Button
          name="ios-arrow-back"
          size={24}
          color="#2675EC"
          backgroundColor="transparent"
          onPress={() => navigation.goBack()}
          underlayColor="transparent"
        />
        <Text style={sytles.nickname}>@{route.params.item.login.username}</Text>
      </View>
      <View style={sytles.containerInfo}>
        <Image
          source={{ uri: route.params.item.picture.large }}
          style={sytles.img}
        />
        <View style={sytles.info}>
          <Text style={sytles.name}>{route.params.item.name.first}</Text>
          <Text style={sytles.phone}>{route.params.item.phone}</Text>
        </View>
      </View>

      <View style={sytles.containerProfile}>
        <Text style={sytles.textProfile}>Perfil</Text>
        <Text style={sytles.cell}>{route.params.item.cell}</Text>
        <Text style={sytles.label}>Número de telefone</Text>
        <Text style={sytles.cell}>{route.params.item.location.state}</Text>
        <Text style={sytles.label}>Estado</Text>
        <Text style={sytles.cell}>{route.params.item.gender}</Text>
        <Text style={sytles.label}>Gênero</Text>
      </View>
    </View>
  );
}
const sytles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  nickname: {
    marginLeft: 5,
    color: "#2675EC",
  },
  containerInfo: { flexDirection: "row", alignItems: "center" },
  img: {
    width: 82,
    height: 82,
    borderRadius: 32,
  },
  info: { marginLeft: 20 },
  name: { color: "#131313", fontWeight: "bold", fontSize: 20 },
  phone: { color: "#848484" },
  containerProfile: {
    marginTop: 20,
  },
  textProfile: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  cell: {
    fontWeight: "bold",
  },
  label: {
    color: "#848484",
    fontSize: 13,
    marginBottom: 20,
  },
});
