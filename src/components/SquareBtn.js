import { View, Text ,TouchableOpacity,SIZES, StyleSheet} from 'react-native'
import React from 'react'

const SquareButton = () => {
  return (
    <TouchableOpacity
      style={styles.conatainer}
      onPress={() => {}}
    >
      
    </TouchableOpacity>
  )
}

export default SquareButton

const styles=StyleSheet.create({
  conatainer : {
    width: 15,
    height: 15,
    backgroundColor: "#F5B80D",
    marginLeft:10,
    marginTop:10,
    borderWidth:1,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
  }
})