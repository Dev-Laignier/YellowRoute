import React from "react";
import { MaterialIcons, MaterialCommunityIcons  } from "@expo/vector-icons";
import { HStack, IconButton, Icon } from "native-base";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import firebaseConfig from "../../settings/Firebase/firebaseconfig";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type StackRoutes = {
  Welcome: undefined;
}

const Footer: React.FC = () => {

  const navigation: NavigationProp<StackRoutes> = useNavigation();

  const handleLogOut = () => {
    signOut(auth)
    .then(() => {
      navigation.navigate("Welcome");
    })
    .catch((error) => {
      console.error(error);
    })
  }

  return (
    <>
      <HStack bg="#f6c101" h={60} justifyContent="space-between" w="100%" alignItems={"center"}>
          {/* <IconButton
            icon={
              <Icon size="9" as={MaterialIcons} name="menu" color="#201140" />
            }
          />
          <Text style={{ fontSize: 32, color: "#201140", fontWeight: "700" }}>
            Footer
          </Text> */}

          <IconButton
            marginRight={4}
            onPress={handleLogOut}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="logout"
                size="9"
                color="#201140"
              />
            }
          />

      </HStack>
    </>
  );
};
export default Footer;
