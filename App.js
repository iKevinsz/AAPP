// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LojaScreen from './app/LojaScreen';  // Importando a tela da loja
import CarrinhoScreen from './app/CarrinhoScreen';  // Importando a tela do carrinho

// Criando a navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loja">
        <Stack.Screen
          name="Loja"
          component={LojaScreen}
          options={{ title: 'Pizzaria do Kevin' }}  // Título da tela da loja
        />
        <Stack.Screen
          name="Carrinho"
          component={CarrinhoScreen}
          options={{ title: 'Carrinho' }}  // Título da tela do carrinho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
