import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  HeaderText,
  ConfirmBox,
  ConfirmText,
  ImageBox,
  ButtonClose,
  ButtomShare,
  Image,
} from './styled';

const Order = ({route, navigation}) => {
  navigation.setOptions({
    headerShown: false,
  });
  const {name, url_image, amount, size} = route.params;
  return (
    <Container>
      <Header>
        <ButtonClose onPress={() => navigation.goBack()}>
          <HeaderText>Fechar</HeaderText>
        </ButtonClose>
        <ButtomShare>
          <Icon name="share" size={24} color="#000" />
        </ButtomShare>
      </Header>
      <ConfirmBox>
        <Icon name="check-circle" size={48} color="#000" />
        <ConfirmText>Pedido Confirmado!</ConfirmText>
      </ConfirmBox>
      <ImageBox>
        <Image
          source={{
            uri: url_image,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 30,
          }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'center',
                marginRight: 5,
              }}>
              R$ {amount}
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
                textAlign: 'center',
              }}>
              {size}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
              }}>
              Tamanho
            </Text>
          </View>
        </View>
      </ImageBox>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontSize: 16,
            marginTop: 10,
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
            paddingHorizontal: 20,
          }}>
          Enviamos a confirmação do pedido via e-mail com informações sobre o
          pedido
        </Text>
        <Image
          style={{
            height: 75,
            width: 75,
            marginVertical: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
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
        onPress={() => navigation.navigate('Home')}>
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
    </Container>
  );
};

export default Order;
