import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Main from "../pages/Main";
import MovieDescription from "../pages/MovieDescription";
import { RootStackParamList } from "../@types";

const Stack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MovieDescription" component={MovieDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
