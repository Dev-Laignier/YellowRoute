import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const HeaderContainer = styled.View`
  height: 60px;
  width: 100%;
  background-color: #f6c101;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: #201140;
  align-self: center;
  position: absolute;
`
export const MenuIcon = styled(Ionicons)`
  right: 150px;
`