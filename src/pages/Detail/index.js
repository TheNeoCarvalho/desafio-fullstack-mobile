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
  const [isModalVisible, setModalVisible] = useState(false);
  const [shoe, setShoe] = useState({});
  const toggleModal = () => {
    if (isModalVisible) {
      setModalVisible(!isModalVisible);
      navigation.navigate('Home');
    }
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setShoe(route.params.data);
  }, [shoe]);

  const handleBuy = async product_id => {
    await api.post(`/order/${product_id}`);
    toggleModal();
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
      <Modal backdropColor="#000" isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            width: '100%',
            backgroundColor: '#fff',
            padding: 5,
            paddingTop: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="check-circle" size={64} color="#000" />
            <Text
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Pedido confirmado!
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              marginHorizontal: 80,
              marginVertical: 20,
            }}>
            <Image
              style={{
                width: 130,
                height: 130,
              }}
              source={{
                uri: shoe.url_image,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 10,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000',
                    marginRight: 10,
                  }}>
                  R$ {shoe.amount}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginRight: 5,
                  }}>
                  Valor da Oferta
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#000',
                    marginLeft: 10,
                  }}>
                  {shoe.size}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                    marginLeft: 5,
                  }}>
                  Tamanho
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontSize: 16,
              }}>
              ACOMPANHAR PEDIDO
            </Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
              }}>
              Enviamos a confirmação do pedido via e-mail com informações sobre
              o pedido
            </Text>
            <Image
              style={{
                height: 75,
                width: 75,
                marginVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}
              source={require('../../assets/images/logo.png')}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: '100%',
              padding: 5,
              marginTop: 10,
            }}
            title="Fechar"
            onPress={toggleModal}>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default Detail;
