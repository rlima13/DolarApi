import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Moeda from './components/Moeda';
import Api from './components/Api';

export default function App() {
  const [moeda, setMoeda] = useState(0);
	
  async function carregaMoeda(){
	  const response = await Api.get('json/last/USD-BRL');
	  
	  setMoeda(response.data.USDBRL);
  };
	
  return (
    <View style={styles.container}>
    	<View style={styles.bloco}>
			<Text  style={styles.texto}>Cotação de Moedas</Text>
			
			<TouchableOpacity 
				style={styles.botao}
				onPress={carregaMoeda}
			>
				<Text style={styles.textoBotao}>Dolar para Real</Text>
			</TouchableOpacity>
			
			<Moeda data={moeda} />
    	</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
	borderRadius: 10,
	backgroundColor: '#fff',
	  
	width: '98%',
	height: '50vh',
	  
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-evenly',
  },
  texto: {
	fontSize: 20,  
  },
  botao: {
	width: '90%',
	backgroundColor: 'black',
	borderRadius: 10,
	height: '5vh',
	alignItems: 'center',
	justifyContent: 'center',
  },
  textoBotao: {
	fontSize: 20, 
	color: 'white',
  }
});