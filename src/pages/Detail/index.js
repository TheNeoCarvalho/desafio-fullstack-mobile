import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';

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

const Detail = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  navigation.setOptions({
    headerTitle: false,
  });
  return (
    <>
      <ScrollView>
        <Container>
          <TagBox>
            <Tags>100% Autêntico</Tags>
            <Tags>Novo</Tags>
          </TagBox>
          <ImageBox>
            <Image
              source={{
                uri: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/b289af05-69de-4af1-a3ab-7534dc208863.jpg',
              }}
            />
          </ImageBox>
          <TextBox>
            <Title>Jordan 4 Retro 'White Oreo' 2021</Title>
            <Price>R$ 1150,00</Price>
          </TextBox>
          <SizeBox>
            <PriceSmall>R$ 1150,00</PriceSmall>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SizeText>9</SizeText>
              <SizeText>10</SizeText>
              <SizeText>11</SizeText>
              <SizeText>12</SizeText>
              <SizeText>12.5</SizeText>
              <SizeText>13</SizeText>
              <SizeText>13.5</SizeText>
            </ScrollView>
          </SizeBox>
          <SizeSmall>Tamanho</SizeSmall>
          <ButtonBox>
            <Button onPress={toggleModal}>
              <Divisor>
                <TextLeft style={{marginRight: 10}}>Comprar</TextLeft>
                <TextLeft style={{marginRight: 10, fontSize: 12}}>
                  Lance
                </TextLeft>
              </Divisor>
              <View>
                <TextRight>R$ 1150,00</TextRight>
                <TextRight style={{fontSize: 12}}>Tamanho 12</TextRight>
              </View>
            </Button>
          </ButtonBox>
        </Container>
        <Modal backdropColor="#000" isVisible={isModalVisible}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#fff',
              padding: 10,
            }}>
            <Button
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#fff',
                padding: 10,
              }}
              title="Fechar"
              onPress={toggleModal}>
              <Text>Fechar!</Text>
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default Detail;
