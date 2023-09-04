import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import UserDetails from "../screens/UserDetails";
const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: any;
  UserDetails: any;
};

const StackComponent = createNativeStackNavigator<RootStackParamList>();

export function RouteMain() {
  return (
    <StackComponent.Navigator>
      <StackComponent.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="UserDetails"
        options={{ headerShown: false }}
        component={UserDetails}
      />
    </StackComponent.Navigator>
  );
}
