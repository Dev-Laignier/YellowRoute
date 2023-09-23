import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #201140;
  font-family: ${({ theme }) => theme.FONTS.Rubik_500};
  letter-spacing: 2px;
`