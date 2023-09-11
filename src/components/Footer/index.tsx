import React from "react";
import { MaterialIcons, MaterialCommunityIcons  } from "@expo/vector-icons";
import { Text } from "react-native";
import { HStack, IconButton, Icon } from "native-base";

const Footer: React.FC = () => {
  return (
    <>
      <HStack bg="#f6c101" h={60} justifyContent="space-between" w="100%" alignItems={"center"}>
          {/* <IconButton
            icon={
              <Icon size="9" as={MaterialIcons} name="menu" color="#201140" />
            }
          /> */}
          {/* <Text style={{ fontSize: 32, color: "#201140", fontWeight: "700" }}>
            Footer
          </Text> */}

          {/* <IconButton
            marginRight={4}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="logout"
                size="9"
                color="#201140"
              />
            }
          /> */}

      </HStack>
    </>
  );
};
export default Footer;
