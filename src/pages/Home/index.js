import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
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
import axios from 'axios';

import CategoryItem from '../../components/CategoryItem';
import BrandItem from '../../components/BrandItem';

import SplashScreen from 'react-native-splash-screen';

const Home = () => {
  const navigation = useNavigation();
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

  const [shoesList, setShoesList] = useState([]);
  const [brand, setBrand] = useState(' ');
  const [loading, setLoading] = useState(true);

  const search = brand => {
    setBrand(brand.toUpperCase());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://192.168.1.3:3000/product?search=${brand}`)
      .then(response => {
        setShoesList(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('error');
      });
    SplashScreen.hide();
  }, [brand]);

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
          <BrandItem action={() => search(brand)} key={index}>
            {brand}
          </BrandItem>
        ))}
      </FilterBrand>
      <ScrollView style={{backgroundColor: '#fff'}}>
        {loading ? (
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '50%',
            }}
            size="large"
            color={'#000'}
          />
        ) : (
          <Container>
            {shoesList.length === 0 ? (
              <Text
                style={{
                  width: '100%',
                  marginTop: '100%',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Nenhum produto encontrado
              </Text>
            ) : (
              shoesList.map((shoe, index) => (
                <Card
                  key={index}
                  onPress={() => navigation.navigate('Detail', {data: shoe})}>
                  <CardImage
                    source={{
                      uri: shoe.url_image,
                    }}
                  />
                  <CardTitle>{shoe.name}</CardTitle>
                  <CardPrice>R$ {shoe.amount}</CardPrice>
                </Card>
              ))
            )}
          </Container>
        )}
      </ScrollView>
    </>
  );
};

export default Home;
