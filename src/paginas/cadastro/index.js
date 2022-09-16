import React,{useState}  from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome] = useState ('')

  return (
    <View style={styles.container}>
      <Text>CADASTRO</Text>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        autoCapitalize="none"
      />
      <Text>Nota 1:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        autoCapitalize="none"
      />
      <Text>Nota 2:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        autoCapitalize="none"
      />
      <Text>Nota 3:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        autoCapitalize="none"
      />
      <Text>Média:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        autoCapitalize="none"
      />

    <TouchableOpacity style = {styles.botao}> CADASTRAR </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botao: {
    width: '90%',
    backgroundColor: 'blue',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    color: 'cyan'
  },
  input: {
    width: '90%',
    height: 30,
    borderRadius: 3,
    marginTop: 10,
    borderWidth: 2,
  
  }
});