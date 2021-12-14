import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const TagBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Tags = styled.Text`
  z-index: 2;
  font-family: 'AdobeCleanUXRegulart';
  font-size: 10px;
  color: #ccc;
  background-color: #fff;
  padding: 3px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-left: 5px;
`;

export const ImageBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 250px;
`;

export const Image = styled.Image`
  width: 350px;
  height: 250px;
`;

export const TextBox = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.Text`
  width: 90%;
  margin-top: -30px;
  margin: 0 1px;
  font-family: 'AdobeCleanBold';
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  border-right-color: #fff;
  border-left-color: #fff;
  border-top-color: #fff;
  border-bottom-color: #ddd;
  border-width: 1px;
  padding-bottom: 10px;
`;

export const Price = styled.Text`
  width: 90%;
  font-family: 'Poppins';
  font-size: 32px;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-top: 15px;
  border-right-color: #fff;
  border-left-color: #fff;
  border-top-color: #fff;
  border-bottom-color: #ddd;
  border-width: 1px;
  padding-bottom: 15px;
`;

export const SizeBox = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 200px;
  text-align: center;
`;

export const SizeText = styled.Text`
  color: #ccc;
  font-family: 'OpenSans-Bold';
  font-size: 45px;
  padding-left: 25px;
  padding-right: 25px;
  margin-top: -10px;
`;

export const PriceSmall = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: bold;
  color: #222;
  text-align: center;
  margin-top: 15px;
  padding-bottom: 10px;
`;

export const SizeSmall = styled.Text`
  width: 100%;
  font-family: 'Poppins';
  font-size: 14px;
  color: #999;
  text-align: center;
  margin-top: -110px;
  padding-bottom: 10px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  margin: 10px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #004716;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
`;

export const TextLeft = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: right;
`;
export const TextRight = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

export const Divisor = styled.View`
  border-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.2);
  border-left-color: transparent;
  border-top-color: transparent;
  border-bottom-color: transparent;
  margin-right: 10px;
`;
