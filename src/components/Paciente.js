import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Paciente = ({ item, onEliminar, onEditar }) => {
  const { paciente, propietario } = item;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{paciente}</Text>
      <Text style={styles.text}>{propietario}</Text>
      <TouchableOpacity onPress={onEliminar} style={styles.button}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onEditar(item)} style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'blue',
    padding: 5,
  },
  text: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#4CDD09',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Paciente;
