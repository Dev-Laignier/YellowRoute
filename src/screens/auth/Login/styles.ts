import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Goback = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  margin-left: 32px;
  position: absolute;
  top: 32px;
  align-self: flex-start;
`;

export const Animation = styled.View`
  width: 100%;
  height: 280px;
  margin-top: 16px;
  margin-bottom: 12px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  width: 80%;
  margin-bottom: 12px;
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`;
export const TextRecovery = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  margin-bottom: 12px;
  text-decoration: underline;
  text-shadow: rgba(255,68,221,0.90) 1px 0 10px;
`
export const Texto = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.YELLOW};;
  letter-spacing: 2px;
  font-weight: 800;
`;
