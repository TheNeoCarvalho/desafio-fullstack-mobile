import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const TagBox = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin-left: -270px;
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
