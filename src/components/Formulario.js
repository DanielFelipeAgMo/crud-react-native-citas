import React, { useState, useEffect } from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';

function Formulario({
  modalVisible,
  setModalVisible,
  agregarPaciente,
  pacienteSeleccionado,
  setPacienteSeleccionado,
}) {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (pacienteSeleccionado) {
      setPaciente(pacienteSeleccionado.paciente);
      setPropietario(pacienteSeleccionado.propietario);
      setEmail(pacienteSeleccionado.email);
      setTelefono(pacienteSeleccionado.telefono);
      setSintomas(pacienteSeleccionado.sintomas);
    } else {
      resetForm();
    }
  }, [pacienteSeleccionado]);

  const resetForm = () => {
    setPaciente('');
    setPropietario('');
    setEmail('');
    setTelefono('');
    setSintomas('');
  };

  const handleCita = () => {
    if ([paciente, propietario, telefono, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      sintomas,
    };

    if (pacienteSeleccionado) {
      agregarPaciente(nuevoPaciente);
    } else {
      agregarPaciente(nuevoPaciente);
      resetForm();
    }

    setPacienteSeleccionado(null);
    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.tituloBold}>Nueva Cita</Text>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre del propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
              maxLength={10}
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.sintomasInput, styles.input]}
              placeholder="Sintomas"
              placeholderTextColor={'#666'}
              multiline={true}
              numberOfLines={5}
              value={sintomas}
              onChangeText={setSintomas}
            />
          </View>
          <Pressable
            style={styles.btnCancelar}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#013D3D',
        flex: 1,
    },
    label: {
        color: '#FFFF',
        marginBottom: 10,
        marginTop: 15,
        fontFont: 30,
        fontWeight: 500,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16,
        color: '#FFFF',
    },
    tituloBold: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '600',
        color: '#79CB1D',
    },
    btnCancelar: {
        marginVertical: 50,
        backgroundColor: '#4CDD09',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnCancelarTexto: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    sintomasInput: {
        height: 100,
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: '#4CDD09',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#FFFF',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    },
});
export default Formulario;