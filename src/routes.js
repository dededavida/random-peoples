import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./pages/Main";
import Detail from "./pages/Detail";

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// options={{
//   title: "Random People",
//   headerStyle: {
//     textAlign: "center",
//     height: 100,
//   },
//   headerTitleStyle: {
//     color: "#2675EC",
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// }}
