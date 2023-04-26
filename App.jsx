import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

const App = () => {

  const [contador, setContador] = useState(0); 
  
  const reduceNumero=()=> {
    setContador(contador-1); 
  }; 

  const addNumero=()=> {
    setContador(contador+1)
  }
  

  return (
    <View style={styles.container} >

      <View style={styles.subcontainer}>
        <TouchableOpacity onPress={()=>reduceNumero()}
          style={styles.boton}
        
        >
          <Text style={styles.textcolor} > - </Text>

        </TouchableOpacity>

        <View  style={styles.counterContainer}>

        <Text style={styles.counter} > {contador} </Text>


        </View>

        <TouchableOpacity onPress={()=>addNumero()}
          style={styles.boton}
        
        >
          <Text style={styles.textcolor} > + </Text>

        </TouchableOpacity>

      </View>
      
    </View>
  )
}

const styles=StyleSheet.create ({

  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center"
  },

  subcontainer: {
    height: 50,
    width: "100%",
    padding: 5, 
    flexDirection: "row"

  },

  boton: {

  width: 50,
  height: 50,  
  justifyContent: "center",
  alignItems: "center", 
  backgroundColor: "blue"
  }, 

  textcolor:{

    color: "white", 
    fontSize: 35, 
    fontWeight: 'bold',
  }, 

  counterContainer: {

    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  counter: {

    
    color: "white",
    fontWeight: "bold",
    fontSize: 30
    


  }

  


})

export default App