import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

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
              padding: 5,
              paddingTop: 50,
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
                marginVertical: 30,
              }}>
              <Image
                style={{
                  width: 130,
                  height: 130,
                }}
                source={{
                  uri: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/51dc3336-0c5a-4a58-b96f-4ab0fe1ce961.jpg',
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
                    R$ 1350,00
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
                    12.5
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
                marginHorizontal: 140,
                marginVertical: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/images/logo.png')}
            />
            <Button
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#fff',
                padding: 10,
              }}
              title="Fechar"
              onPress={toggleModal}>
              <Text
                style={{
                  textAlign: 'center',
                  textDecorationLine: 'underline',
                  fontSize: 18,
                }}>
                Fechar
              </Text>
            </Button>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default Detail;
