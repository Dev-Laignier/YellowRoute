import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const TextTop = styled.Text`
  flex: 1;
  width: 85%;
  text-align: center;
  top: 10%;
  font-size: 40px;
  margin: 8px 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`;

export const TextBottom = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
  text-align: center;
  width: 85%;
  margin-bottom: 48px;
`;

export const Texto = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.YELLOW};;
  letter-spacing: 3px;
  font-weight: 800;
`;
export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  font-weight: 400;
`