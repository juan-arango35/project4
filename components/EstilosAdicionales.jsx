import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const EstilosAdicionales = () => {
  return (
    <View style={styles.contenedorextra} >
      <Text styles={styles.textocolor}> estamos en estilos adicionales </Text>
    </View>
  )
}

export default EstilosAdicionales

const styles= StyleSheet.create ({

    contenedorextra: {
        height: 45,
        width: "100%",
        backgroundColor: "white"

    },

    textocolor: {

        color: "green"

    }
})