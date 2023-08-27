import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./Stack.Routes";
import { StatusBar } from "react-native";

export default function Routes(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={"#000"} barStyle="light-content"/>
      <StackRoutes/>
    </NavigationContainer>
  )
}