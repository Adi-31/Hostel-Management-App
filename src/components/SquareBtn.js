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
    width: 21,
    height: 21,
    backgroundColor: "#FDEBBC",
    marginTop:5,
    borderWidth:1,
    alignItems: "flex-start",
    justifyContent: 'flex-start',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#F5B80D'
    
  }
})