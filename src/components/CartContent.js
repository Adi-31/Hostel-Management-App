import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const CartContent = () => {
  const [count , setCount]=useState(0) 
  const onPress = () => setCount(prevCount => prevCount + 1);
  const onPress2 = () => setCount(prevCount => prevCount - 1);


  return (
    <View style={{flexDirection :'row'}}>
      <View style={{flex : 3 , backgroundColor : '#fffaf0',padding : 8,marginLeft:10}}>
        <Text style={{fontWeight : '700', fontSize : 15}}>
          Porotta & Chicken Curry ..
        </Text>
        <Text style={{fontWeight : '400', fontSize : 10}}> 2 porotta 2 chicken curry + tea</Text>

      </View>
      <View style={{flex : 2, backgroundColor : '#fffaf0',alignItems: 'center', justifyContent : 'center',flexDirection:'row'}}>
      <TouchableOpacity style ={{padding : 6}} onPress= {onPress2}>
        <Text style={{fontSize: 25}}> -</Text>
      </TouchableOpacity>
      <View>
        <Text>
          {count}
        </Text>
      </View>

      <TouchableOpacity style ={{padding : 6}} onPress = {onPress}>
        <Text style={{fontSize: 18}}>+</Text>
      </TouchableOpacity>


      </View>
      
      <View style={{flex : 1 ,backgroundColor : '#dcdcdc', alignItems: 'center', justifyContent : 'center',borderRadius:10, marginEnd:10}}>
      <Text>
         Rs 60
        </Text>
      </View>
      
      

      
    </View>
  )
}

export default CartContent 