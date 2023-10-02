import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import Home from "../screens/main/Home";
import Clients from "../screens/main/Clientes";
import Dashboard from "../screens/main/Dashboard";
import Users from "../screens/main/Users";
import Schedule from "../screens/main/Schedule";
import Routing from "../screens/main/Routing";
import Requests from "../screens/main/Requests";
import Reports from "../screens/main/Reports";
import Agenda from "../screens/main/Agenda";

const Stack = createNativeStackNavigator();

const StackRoute: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Clientes"
        component={Clients}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Requests"
        component={Requests}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Routing"
        component={Routing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default StackRoute;
