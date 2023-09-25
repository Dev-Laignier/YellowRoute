import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import StackRoute from "./StackRoute";
import Home from "../screens/main/Home";

const Drawer = createDrawerNavigator();

const DrawerRoute: React.FC = () => {
  return(
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: "#cfb558"
      }
    }}>
      <Drawer.Screen
        name="Yellow Route"
        component={StackRoute}
        options={{
          headerShown: false,
          drawerLabelStyle:{
            fontSize: 26,
            justifyContent: "center",
            alignSelf: "center",
            color: "#201140",
            fontFamily: "Rubik_Bold",
          },
          drawerActiveBackgroundColor:"#cfb558"
        }}
      />
      <Drawer.Screen
        name="BacHome"
        component={Home}
        options={{
          title:"",
          headerShown: false,
          drawerLabel: "Home",
          drawerLabelStyle:{
            color: "#630d7ee2",
            fontSize: 18,
          },
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "home" : "home"}
              size={24}
              color={"#630d7ee2"}
          />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerRoute;