import styled from "styled-components/native";

export const TextTop = styled.Text`
  flex: 1;
  width: 330px;
  text-align: center;
  top: 10%;
  font-size: 40px;
  margin: 8px 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`;

export const TextBottm = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
  text-align: center;
  width: 330px;
  margin-bottom: 48px;
`;

export const Texto = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.YELLOW};;
  letter-spacing: 2px;
  font-weight: 800;
`