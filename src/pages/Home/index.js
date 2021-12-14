import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Search,
  SearchGroup,
  Input,
  FilterCategory,
  FilterBrand,
  Card,
  CardImage,
  CardTitle,
  CardPrice,
} from './styled';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import CategoryItem from '../../components/CategoryItem';
import BrandItem from '../../components/BrandItem';

import SplashScreen from 'react-native-splash-screen';

const Home = () => {
  const navigation = useNavigation();
  const shoes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const brands = [
    'Jordan',
    'Yeezy',
    'Nike',
    'Adidas',
    'Balanciaga',
    'New Balance',
  ];
  const categories = [
    'Novo',
    'usado',
    'Lançamento',
    'Promocional',
    'Homens',
    'Mulheres',
    'Infantil',
  ];

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Search>
        <SearchGroup>
          <Icon name="search" size={24} />
          <Input placeholder="Pesquisar" />
        </SearchGroup>
        <TouchableOpacity>
          <Icon name="sliders" size={24} />
        </TouchableOpacity>
      </Search>
      <FilterCategory
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <CategoryItem key={index}>{category}</CategoryItem>
        ))}
      </FilterCategory>

      <FilterBrand
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {brands.map((brand, index) => (
          <BrandItem key={index}>{brand}</BrandItem>
        ))}
      </FilterBrand>

      <ScrollView>
        <Container>
          {shoes.map((shoe, index) => (
            <Card
              key={index}
              onPress={() => navigation.navigate('Detail', {data: shoe})}>
              <CardImage
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
              />
              <CardTitle>Dunk High 'Kentucky' 2021</CardTitle>
              <CardPrice>R$ 681</CardPrice>
            </Card>
          ))}
        </Container>
      </ScrollView>
    </>
  );
};

export default Home;
