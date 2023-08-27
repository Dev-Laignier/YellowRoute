import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutes from "./Stack.Routes";
import Settings from "../Pages/Settings";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../styles";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return(
    <Drawer.Navigator 
      screenOptions=
      {{
        title: "Yellow Route",
        drawerLabelStyle:{
          fontSize: 26,
          justifyContent: "center",
          alignSelf: "center",
          color: colors.BLUE,
          fontWeight: "bold"
        },
        headerShown: false,
        drawerStyle:{
          backgroundColor: colors.YELLOWBACKGROUND,
          width: "75%",
        }
      }}
    >
      <Drawer.Screen 
        name="Main Drawer"
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title:"",
          drawerContentStyle:{
            
          },
          headerShown: false,
          drawerLabel: "Configurações",
          drawerLabelStyle:{
            color: colors.BLUE,
            fontSize: 16,
          },
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "cog" : "cogs"}
              size={24}
              color={colors.BLUE}
            />
          ),
        }}
    />
    </Drawer.Navigator>
  )
}