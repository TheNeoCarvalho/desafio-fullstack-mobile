import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 5px;
  padding-bottom: 10px;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-style: solid;
  border-bottom-color: #ddd;
  border-bottom-width: 1px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;
export const ButtomShare = styled.TouchableOpacity``;
export const HeaderText = styled.Text`
  font-family: 'AdobeCleanRegular';
  font-size: 18px;
  color: #089;
`;

export const ConfirmBox = styled.View`
  padding: 10px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ConfirmText = styled.Text`
  font-family: 'AdobeCleanBold';
  font-size: 28;
  font-weight: bold;
  color: #000;
  margin-top: 15px;
`;

export const ImageBox = styled.View`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  margin: 10px 50px;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
`;
