import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 32px 25px;
`

export const IconBack = styled.View`
  /* position: absolute; */
  width: 42px;
  height: 42px;
  top: 0px;
  left: 0px;
  /* margin: 55px 25px */
`
export const InputText = styled.TextInput`
   border-bottom-width: 1px;
   border-bottom-color: #F6C101;
   color: #201140;
   font-Size: 14px;
   width: 100%;
   height: 32px;
`

export const PasswordInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #F6C101;
  width: 100%;
  height: 40px;
`

export const PasswordTextInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #201140;
`

export const ToggleButton = styled.TouchableOpacity`
  padding: 0px 8px;
`