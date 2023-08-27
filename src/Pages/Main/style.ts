import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const MainContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 150px;
  /* align-items: center; */
`;

export const IconBtn = styled.TouchableOpacity`
  width: 25%;
  align-items: center;
  margin: 32px 8px;
`
export const Title = styled.Text`
  font-size: 16px;
  color: #201140;
  margin: 8px;
  font-weight: 400;
`