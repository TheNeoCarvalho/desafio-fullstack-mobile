import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import {
  Container,
  TagBox,
  Tags,
  ImageBox,
  Image,
  TextBox,
  Title,
  Price,
  SizeBox,
  SizeText,
  PriceSmall,
  SizeSmall,
  ButtonBox,
  Button,
  Divisor,
  TextLeft,
  TextRight,
} from './styled';

const Detail = ({route, navigation}) => {
  const [shoe, setShoe] = useState({});

  useEffect(() => {
    setShoe(route.params.data);
  }, [shoe]);

  const handleBuy = async product_id => {
    await api.post(`/order/${product_id}`);
    goToOrder();
  };

  const goToOrder = async () => {
    navigation.navigate('Order', {
      name: shoe?.name,
      amount: shoe?.amount,
      size: shoe?.size,
      url_image: shoe?.url_image,
    });
  };

  navigation.setOptions({
    headerTitle: false,
  });
  return (
    <>
      <ScrollView>
        <Container>
          <TagBox>
            {shoe.category?.map(tag => (
              <Tags key={tag}>{tag}</Tags>
            ))}
          </TagBox>
          <ImageBox>
            <Image
              source={{
                uri: shoe.url_image,
              }}
            />
          </ImageBox>
          <TextBox>
            <Title>{shoe.name}</Title>
            <Price>R$ {shoe.amount}</Price>
          </TextBox>
          <SizeBox>
            <PriceSmall>R$ {shoe.amount}</PriceSmall>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeText>{shoe.size}</SizeText>
            </ScrollView>
          </SizeBox>
          <SizeSmall>Tamanho</SizeSmall>
          <ButtonBox>
            <Button onPress={() => handleBuy(shoe.id)}>
              <Divisor>
                <TextLeft style={{marginRight: 10}}>Comprar</TextLeft>
                <TextLeft style={{marginRight: 10, fontSize: 12}}>
                  Lance
                </TextLeft>
              </Divisor>
              <View>
                <TextRight>R$ {shoe.amount}</TextRight>
                <TextRight style={{fontSize: 12}}>
                  Tamanho {shoe.size}
                </TextRight>
              </View>
            </Button>
          </ButtonBox>
        </Container>
      </ScrollView>
    </>
  );
};

export default Detail;
