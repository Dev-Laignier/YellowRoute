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
  text-shadow: rgba(255, 68, 221, 0.9) 1px 0 10px;
  font-family: ${({ theme }) => theme.FONTS.Rubik_400};
`;

export const ContainerRecovery = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 85%;
  height: 40px;
  margin: 4px 8px 8px 2px;
`;

export const TextR = styled.Text`
  font-size: 14px;
  text-shadow: rgba(255, 68, 221, 0.9) 1px 0 10px;
  color: ${({ theme }) => theme.COLORS.BLUE}
`;

export const TextRecovery = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  text-decoration: underline;
  text-shadow: rgba(255, 68, 221, 0.9) 1px 0 10px;
  font-family: ${({ theme }) => theme.FONTS.Rubik_400};
`;

export const Texto = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.YELLOW};
  letter-spacing: 2px;
  font-family: ${({ theme }) => theme.FONTS.Rubik_500};
`;
