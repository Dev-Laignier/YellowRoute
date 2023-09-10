import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoute from "./StackRoute";

const Drawer = createDrawerNavigator();

const DrawerRoute: React.FC = () => {
  return(
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: "#000000"
      }
    }}>
      <Drawer.Screen
        name="MainRoute"
        component={StackRoute}
      />
    </Drawer.Navigator>
  );
}
export default DrawerRoute;