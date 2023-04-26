import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import EstilosAdicionales from './components/EstilosAdicionales';

export default function App() {
  return (
    <View style={styles.principal}>
      <View style={styles.container}>
        <Text style={styles.contenedortext}>dentro de la primera caja </Text>
      </View>
      <EstilosAdicionales />

      <View style={styles.container2}>
        <Text style={styles.contendortexto2}>dentro de la segunda caja</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    width: '100%',

    backgroundColor: 'green',
  },

  container: {
    flex: 1,
    backgroundColor: 'red',
    height: 45,
    width: '100%',
  },

  contenedor: {
    color: 'red',
  },

  container2: {
    flex: 1,

    backgroundColor: 'blue',
  },

  contenedortext: {
    color: 'white',
  },
  contendortexto2: {
    color: 'gray',
  },
});
