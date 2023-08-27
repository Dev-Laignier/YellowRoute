import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

interface FooterProps {
  isMain: boolean;
}

export const FooterContainer = styled.View<FooterProps>`
  height: 60px;
  width: 100%;
  background-color: #f6c101;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.isMain ? "flex-end" : "space-between")};
  padding: 0 8px;
`;

export const FooterIcon = styled(Ionicons)`
  margin: 8px;
`;