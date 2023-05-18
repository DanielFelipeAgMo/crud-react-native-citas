import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

  const editarPaciente = (paciente) => {
    setPacienteSeleccionado(paciente);
    setModalVisible(true);
  };

  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  };

  const agregarPaciente = (nuevoPaciente) => {
    setPacientes([...pacientes, nuevoPaciente]);
  };

  return (
    <SafeAreaView style={styles.contenido}>
      <Text style={styles.titulo}>
        Administracion de citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.sinPacientes}>No existen pacientes</Text>
      ) : (
        <FlatList
          style={styles.lista}
          data={pacientes}
          renderItem={({ item }) => (
            <Paciente
              item={item}
              onEliminar={() => eliminarPaciente(item.id)}
              onEditar={() => editarPaciente(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        agregarPaciente={agregarPaciente}
        pacienteSeleccionado={pacienteSeleccionado}
        setPacienteSeleccionado={setPacienteSeleccionado}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#013D3D',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFF',
  },
  tituloBold: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: '#2FF5F5',
  },
  btnNuevaCita: {
    backgroundColor: '#4CDD09',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  sinPacientes: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFF',
  },
  lista: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'white',
  },
});

export default App;
