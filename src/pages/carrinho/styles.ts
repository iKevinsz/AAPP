import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

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