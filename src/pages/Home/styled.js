import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
`;

export const Search = styled.View`
  background-color: #fff;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const SearchGroup = styled.View`
  width: 90%;
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 25px;
  margin: 0 5px;
`;

export const Filters = styled.View`
  justify-content: center;
  align-items: space-around;
  flex-direction: column;
  background-color: #fff;
`;
export const FilterCategory = styled.ScrollView`
  width: 100%;
  height: 50px;
  max-height: 40px;
  padding: 3px 0;
  padding-bottom: 5px;
  background-color: #fff;
`;

export const FilterBrand = styled.ScrollView`
  width: 100%;
  height: 40px;
  max-height: 40px;
  padding: 5px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ccc;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  background-color: #f8f8f8;
  padding: 5px;
  border-radius: 4px;
`;

export const ButtonFilters = styled.TouchableOpacity`
  margin-left: 8px;
`;

export const Card = styled.TouchableOpacity`
  width: 45%;
  margin: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardImage = styled.Image`
  width: 80%;
  height: 120px;
  background-color: #fff;
`;

export const CardTitle = styled.Text`
  font-family: 'AdobeCleanBold';
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  text-align: center;
  background-color: #fff;
`;

export const CardPrice = styled.Text`
  font-family: 'AdobeCleanBold';
  font-size: 22px;
  font-weight: bold;
  color: #222;
  margin-top: 10px;
  text-align: center;
`;
