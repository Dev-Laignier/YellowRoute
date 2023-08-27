import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./Stack.Routes";
import { StatusBar } from "react-native";
import DrawerRoutes from "./Drawer.Routes";

export default function Routes(){
  return(
    <NavigationContainer>
      <StatusBar barStyle="default"/>
      <DrawerRoutes/>
    </NavigationContainer>
  )
}