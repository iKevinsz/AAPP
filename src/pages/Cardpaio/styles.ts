import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    imagemCapa: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    infoLoja: {
      marginTop: 15,
    },
    nomeLoja: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    descricaoLoja: {
      fontSize: 16,
      color: '#777',
    },
    tituloProdutos: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 15,
    },
    produtoContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingBottom: 15,
    },
    imagemProduto: {
      width: 120,
      height: 120,
      borderRadius: 10,
      marginRight: 15,
    },
    infoProduto: {
      flex: 1,
    },
    nomeProduto: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    descricaoProduto: {
      fontSize: 14,
      color: '#777',
      marginBottom: 10,
    },
    precoProduto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FF5722',
      marginBottom: 15,
    },
    botaoAdicionar: {
      backgroundColor: '#FF5722',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    botaoTexto: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });