import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styled';

const ModalScreen = props => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(props.isVisible);
  };

  return (
    <>
      <Modal backdropColor="#000" isVisible={isVisible}>
        <Container>
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
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              marginTop: 10,
            }}>
            Enviamos a confirmação do pedido via e-mail com informações sobre o
            pedido
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
          <TouchableOpacity
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
                fontWeight: 'bold',
                color: '#000',
              }}>
              Fechar
            </Text>
          </TouchableOpacity>
        </Container>
      </Modal>
    </>
  );
};

export default ModalScreen;
