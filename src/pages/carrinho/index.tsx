// CarrinhoScreen.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipos para o produto
type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
};

type CarrinhoScreenNavigationProp = NativeStackNavigationProp<
  { Loja: undefined },
  'Loja'
>;

interface CarrinhoScreenProps {
  navigation: CarrinhoScreenNavigationProp;
}

const CarrinhoScreen: React.FC<CarrinhoScreenProps> = ({ navigation }) => {
  // Dados fictícios do carrinho
  const [carrinho, setCarrinho] = useState<Produto[]>([
    {
      id: '1',
      nome: 'Pizza de Calabresa',
      preco: 29.9,
      descricao: 'Deliciosa pizza de calabresa com queijo e molho especial.',
      imagem: 'https://example.com/pizza.jpg',
    },
    {
      id: '2',
      nome: 'Pizza Margherita',
      preco: 28.9,
      descricao: 'Pizza clássica com molho de tomate, queijo mozzarella e manjericão.',
      imagem: 'https://example.com/pizza-margherita.jpg',
    },
  ]);

  // Função para remover produto do carrinho
  const removerProduto = (id: string) => {
    setCarrinho(carrinho.filter(produto => produto.id !== id));
  };

  // Calcular o total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloCarrinho}>Carrinho</Text>

      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.produtoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
            <View style={styles.infoProduto}>
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.precoProduto}>R${item.preco.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.botaoRemover}
                onPress={() => removerProduto(item.id)}
              >
                <Text style={styles.botaoTexto}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>Total: R${calcularTotal()}</Text>
      </View>

      <TouchableOpacity
        style={styles.botaoFinalizar}
        onPress={() => navigation.navigate('Loja')}
      >
        <Text style={styles.botaoTexto}>Finalizar Compra</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  tituloCarrinho: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  produtoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 15,
  },
  imagemProduto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  precoProduto: {
    fontSize: 16,
    color: '#FF5722',
    marginVertical: 5,
  },
  botaoRemover: {
    backgroundColor: '#FF5722',
    paddingVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 30,
    alignItems: 'flex-end',
  },
  totalTexto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  botaoFinalizar: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CarrinhoScreen;
