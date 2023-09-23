import React from "react";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook to access navigation
import { DrawerNavigationProp } from "@react-navigation/drawer"; // Import the DrawerNavigationProp type for navigation typing
import { MaterialIcons } from "@expo/vector-icons";
import { HStack, IconButton, Icon } from "native-base";
import { Title } from "./styles";

// Define the type for Drawer routes
type RootDrawerParamList = {
  openDrawer: undefined;
};

// Header component
const Header: React.FC = () => {
  // Get the navigation instance
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  // Function to open the Drawer when the menu icon is pressed
  const handleOpenDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <>
      {/* HStack component to create the header structure */}
      <HStack bg="#f6c101" h={60} justifyContent="space-between" w="100%" alignItems={"center"}>
        {/* Menu button */}
        <IconButton
          onPress={handleOpenDrawer}
          icon={
            <Icon size="9" as={MaterialIcons} name="menu" color="#201140" />
          }
        />
        {/* Title */}
        <Title>
          YellowRoute
        </Title>
        {/* More options button */}
        <IconButton
          icon={
            <Icon
              as={MaterialIcons}
              name="more-vert"
              size="9"
              color="#201140"
            />
          }
        />
      </HStack>
    </>
  );
};
export default Header;
