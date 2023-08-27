import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 0;
`;

export const IconBtn = styled.TouchableOpacity`
  align-items: center;
  margin: 0 8px;
`
export const ContainerIcon = styled.View`
  width: 25%;
  align-items: center;
  margin: 24px 8px;
`
export const Title = styled.Text`
  font-size: 16px;
  color: #201140;
  margin: 8px;
  font-weight: 400;
`