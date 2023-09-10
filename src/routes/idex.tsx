import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoute from "./DrawerRoute";
import { NativeBaseProvider, Box } from "native-base";

const Routes: React.FC = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerRoute />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default Routes;
