import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';

import {Container, TagBox, Tags} from './styled';

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
          <View style={styles.ImageBox}>
            <Image
              style={styles.Image}
              source={{
                uri: 'https://static.cloud-boxloja.com/lojas/ym522/produtos/b289af05-69de-4af1-a3ab-7534dc208863.jpg',
              }}
            />
          </View>
          <View style={styles.TextBox}>
            <Text style={styles.Title}>Jordan 4 Retro 'White Oreo' 2021</Text>
            <Text style={styles.Price}>R$ 1150,00</Text>
          </View>
          <View style={styles.SizeBox}>
            <Text style={styles.PriceSmall}>R$ 1150,00</Text>

            <ScrollView
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <Text style={styles.SizeText}>9</Text>
              <Text style={styles.SizeText}>10</Text>
              <Text style={styles.SizeText}>11</Text>
              <Text style={styles.SizeText}>12</Text>
              <Text style={styles.SizeText}>12.5</Text>
              <Text style={styles.SizeText}>13</Text>
              <Text style={styles.SizeText}>13.5</Text>
            </ScrollView>
          </View>
          <Text style={styles.SizeSmall}>Tamanho</Text>
          <View style={styles.ButtonBox}>
            <TouchableOpacity style={styles.Button} /*onPress={toggleModal}*/>
              <View style={styles.Divisor}>
                <Text style={[styles.TextLeft, {marginRight: 10}]}>
                  Comprar
                </Text>
                <Text
                  style={[styles.TextLeft, {fontSize: 12, marginRight: 10}]}>
                  Lance
                </Text>
              </View>
              <View>
                <Text style={styles.TextRight}>R$ 1150,00</Text>
                <Text style={[styles.TextRight, {fontSize: 12}]}>
                  Tamanho 12
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Container>
        {/* <Modal backdropColor="#000" isVisible={isModalVisible}>
          <View
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#fff',
              padding: 10,
            }}>
            <Text>Hello!</Text>
            <Button title="Fechar" onPress={toggleModal} />
          </View>
        </Modal> */}
      </ScrollView>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  TagBox: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginLeft: -270,
  },
  Tags: {
    zIndex: 2,
    fontFamily: 'AdobeCleanUXRegulart',
    fontSize: 10,
    color: '#ccc',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#eee',
    marginLeft: 5,
  },
  ImageBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    height: 280,
  },
  Image: {
    width: '100%',
    height: 280,
  },
  TextBox: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    width: '90%',
    marginTop: -25,
    marginHorizontal: 1,
    fontFamily: 'AdobeCleanBold',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    borderRightColor: '#fff',
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#ddd',
    borderWidth: 1,
    paddingBottom: 10,
  },
  Price: {
    width: '90%',
    fontFamily: 'Poppins',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginTop: 15,
    borderRightColor: '#fff',
    borderLeftColor: '#fff',
    borderTopColor: '#fff',
    borderBottomColor: '#ddd',
    borderWidth: 1,
    paddingBottom: 15,
  },
  SizeBox: {
    height: 200,
    width: '100%',
  },
  SizeText: {
    color: '#ccc',
    fontFamily: 'OpenSans-Bold',
    fontSize: 45,
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: -10,
  },
  PriceSmall: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginTop: 15,

    paddingBottom: 10,
  },
  SizeSmall: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: -105,
    paddingBottom: 10,
  },
  ButtonBox: {
    width: '100%',
    margin: 25,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '80%',
    backgroundColor: '#004716',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    padding: 5,
  },
  TextLeft: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'right',
  },
  TextRight: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'left',
  },
  Divisor: {
    borderWidth: 1,
    borderRightColor: 'rgba(255,255,255,0.2)',
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginRight: 10,
  },
});
