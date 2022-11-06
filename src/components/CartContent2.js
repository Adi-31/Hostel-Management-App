import { View, Text } from 'react-native'
import React from 'react'

const CartContent2 = () => {
  return (
    <View style={{flexDirection :'row',backgroundColor:'white',padding:10}}>
        <View style={{backgroundColor :'#EFEFF0',padding : 10,marginRight:10, borderRadius:10}}>
          <Text style={{fontWeight : '400', fontSize : 15, }}> Breakfast</Text>
        </View>

        <View style={{backgroundColor : '#EFEFF0',padding : 10, marginRight:10,borderRadius:10}}>
          <Text style={{fontWeight : '400', fontSize : 15}}> Lunch</Text>

        </View>

        <View style={{backgroundColor : '#EFEFF0',padding : 10,borderRadius:10}}>
          <Text style={{fontWeight : '400', fontSize : 15}}> Dinner</Text>

        </View>




      </View>
  )
}

export default CartContent2