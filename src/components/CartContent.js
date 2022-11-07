import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'


const CartContent = () => {
  const [count , setCount]=useState(0) 
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress2 = () => setCount(prevCount => prevCount - 1);


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.carttext}>
          Porotta & Chicken Curry ..
        </Text>
        <Text style={styles.subheading}> 2 porotta 2 chicken curry + tea</Text>

      </View>
      <View style={styles.switchDesign}>
      <TouchableOpacity style ={styles.touch} onPress= {onPress2}>
        <Text style={styles.size}> -</Text>
      </TouchableOpacity>
      <View>
        <Text>
          {count}
        </Text>
      </View>

      <TouchableOpacity style ={styles.touch} onPress = {onPress}>
        <Text style={styles.size}>+</Text>
      </TouchableOpacity>


      </View>
      
      <View style={styles.rupee}>
      <Text>
         Rs 60
        </Text>
      </View>
      
      

      
    </View>
  )
}

export default CartContent ;

const styles= StyleSheet.create({
  container : {flexDirection :'row'},
  container1 : {flex : 3 , backgroundColor : '#fffaf0',padding : 8,marginLeft:10},
  carttext : {fontWeight : '700', fontSize : 15},
  subheading : {fontWeight : '400', fontSize : 10},
  switchDesign : {flex : 2, backgroundColor : '#fffaf0',alignItems: 'center', justifyContent : 'center',flexDirection:'row'},
  touch : {padding : 6},
  size : {fontSize: 25},
  rupee : {flex : 1 ,backgroundColor : '#dcdcdc', alignItems: 'center', justifyContent : 'center',borderRadius:10, marginEnd:10},



})