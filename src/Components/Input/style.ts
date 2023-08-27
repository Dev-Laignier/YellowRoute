import styled from "styled-components/native";
import { TextInput, View } from "react-native";

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-color: #F6C101;
  border-radius: 8px;
  width: 90%;
  border-width: 1px;
  margin: 8px 8px;
  padding: 0px 8px;
`
export const Input = styled(TextInput)`
  flex: 1;
  font-size: 24px;
  color: #201140;
`
export const IconContainer = styled(View)`
  margin-right: 10px;
`
