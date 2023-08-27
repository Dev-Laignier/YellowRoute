import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from "./Stack.Routes";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return(
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen 
        name="Yellow Route"
        component={StackRoutes}
      />
    </Drawer.Navigator>
  )
}