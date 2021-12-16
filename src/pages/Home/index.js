import React, {useEffect, useState} from 'react';
import {
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  View,
  FlatList,
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
  Filters,
} from './styled';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import CategoryItem from '../../components/CategoryItem';
import BrandItem from '../../components/BrandItem';

import SplashScreen from 'react-native-splash-screen';

import api from '../../services/api';

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
    'Usado',
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
  };

  useEffect(() => {
    setLoading(true);
    const loadProducts = async () => {
      api
        .get(`product?search=${brand}`)
        .then(response => {
          setShoesList(response.data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    };
    loadProducts();

    SplashScreen.hide();
  }, [brand]);

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Search>
        <SearchGroup>
          <Icon name="search" size={24} />
          <Input placeholder="Pesquisar" onChangeText={search} />
        </SearchGroup>
        <TouchableOpacity>
          <Icon name="sliders" size={24} />
        </TouchableOpacity>
      </Search>
      <Filters>
        <FilterCategory
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <CategoryItem action={() => search(category)} key={index}>
              {category}
            </CategoryItem>
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
      </Filters>

      <Container>
        {loading ? (
          <ActivityIndicator
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '100%',
            }}
            size="large"
            color={'#000'}
          />
        ) : (
          <FlatList
            data={shoesList}
            numColumns={2}
            renderItem={({item}) => (
              <Card onPress={() => navigation.navigate('Detail', {data: item})}>
                <CardImage source={{uri: item.url_image}} />
                <CardTitle>{item.name}</CardTitle>
                <CardPrice>R$ {item.amount}</CardPrice>
              </Card>
            )}
            keyExtractor={item => String(item.id)}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
