import styled from "styled-components/native";

export const Texto = styled.Text`
  font-size: 32px;
  font-family: ${({ theme}) => theme.FONTS.Rubik_700};
  color: ${({ theme }) => theme.COLORS.TEXTSHADOW};
  margin: 8px;
`;

export const TextoBTN = styled.Text`
  font-size: 32px;
  font-family: ${({ theme}) => theme.FONTS.Rubik_500};
  color: ${({ theme }) => theme.COLORS.YELLOW};
  letter-spacing: 3px;
`;