// LojaScreen.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {styles} from "./styles";
// import { Input } from '@/src/components/input';

// Definindo os tipos para os dados da loja e produto
type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
};

type Loja = {
  nome: string;
  imagemCapa: string;
  descricao: string;
  produtos: Produto[];
};

// Tipando a navegação
type LojaScreenNavigationProp = NativeStackNavigationProp<
  { Carrinho: undefined },
  'Carrinho'
>;

interface LojaScreenProps {
  navigation: LojaScreenNavigationProp;
}

// Tela de Loja
const LojaScreen: React.FC<LojaScreenProps> = ({ navigation }) => {
  // Dados fictícios da loja
  const loja: Loja = {
    nome: 'Pizzaria do Kevin',
    imagemCapa: 'https://www.lacentral.com.br/wp-content/uploads/2023/07/feche-a-pizza-italiana-sobre-o-queijo-cole-o-foco-seletivo-generativo-ai-scaled.jpg', // URL fictícia para a imagem da capa da loja
    descricao: 'A melhor pizza da cidade, feita com ingredientes frescos e de qualidade.',
    produtos: [
      { id: '1', nome: 'Pizza de Calabresa', preco: 29.90, descricao: 'Deliciosa pizza de calabresa com queijo e molho especial.', imagem: 'https://www.procon.am.gov.br/wp-content/uploads/2024/07/pizza-1024x684.jpeg' },
      { id: '2', nome: 'Pizza Margherita', preco: 28.90, descricao: 'Pizza clássica com molho de tomate, queijo mozzarella e manjericão.', imagem: 'https://www.copaenergia.com.br/wp-content/uploads/2023/11/iStock-468515806.jpg' },
      { id: '3', nome: 'Pizza de Frango com Catupiry', preco: 32.90, descricao: 'Pizza de frango desfiado com catupiry e molho especial.', imagem: 'https://static.wixstatic.com/media/d8c828_fd851b6e754747b09366b311d18011d3~mv2.jpg/v1/fill/w_320,h_288,q_90/d8c828_fd851b6e754747b09366b311d18011d3~mv2.jpg' },
      { id: '4', nome: 'Refrigerante', preco: 7.50, descricao: 'Refrigerante gelado de 500ml.', imagem: 'https://sportlife.com.br/wp-content/uploads/2023/03/Refrigerante-1.jpg' },
    ],
  };

  // Função para adicionar produto ao carrinho
  const adicionarCarrinho = (produto: Produto) => {
    console.log('Produto adicionado ao carrinho:', produto);
    // Navega para o carrinho após adicionar
    navigation.navigate('Carrinho');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Imagem de capa e nome da loja */}
      <Image source={{ uri: loja.imagemCapa }} style={styles.imagemCapa} />
      <View style={styles.infoLoja}>
        <Text style={styles.nomeLoja}>{loja.nome}</Text>
        <Text style={styles.descricaoLoja}>{loja.descricao}</Text>
      </View>

      {/* Lista de Produtos */}
      <Text style={styles.tituloProdutos}>Produtos</Text>

      <FlatList
        data={loja.produtos}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.produtoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
            <View style={styles.infoProduto}>
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.descricaoProduto}>{item.descricao}</Text>
              <Text style={styles.precoProduto}>R${item.preco.toFixed(2)}</Text>
              <TouchableOpacity style={styles.botaoAdicionar} onPress={() => adicionarCarrinho(item)}>
                <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};



export default LojaScreen;
