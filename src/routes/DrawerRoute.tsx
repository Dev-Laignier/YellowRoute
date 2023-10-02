import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import StackRoute from "./StackRoute";
import Home from "../screens/main/Home";
import Settings from "../screens/Settings";
import { Image } from "react-native";

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
          drawerIcon:(  ) => (
            <Image
              source={require("../assets/image/dog.png")}
              style={{ width: 200, height: 180, borderRadius: 60 }}
            />
          ),
          headerShown: false,
          drawerLabelStyle: {
            fontSize: 32,
            color: "#000" },
          drawerItemStyle: { marginLeft: 40 },
          drawerStyle: { borderTopRightRadius: 12, borderBottomRightRadius: 12, backgroundColor: "#cfb558", width: 300 },
          drawerActiveBackgroundColor:"#cfb558",
          // drawerLabel: "",
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
              name={"home"}
              size={24}
              color={"#630d7ee2"}
          />
          ),
        }}
      />
      <Drawer.Screen
        name="Configurações"
        component={Settings}
        options={{
          title:"",
          headerShown: false,
          drawerLabel: "Settings",
          drawerLabelStyle:{
            color: "#630d7ee2",
            fontSize: 18,
          },
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={"settings"}
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