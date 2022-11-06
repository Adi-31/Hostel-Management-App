import { View, Text } from 'react-native'
import React from 'react'

const CartList = () => {
  return (

<View>
        <View style={{ flexDirection:'row',  backgroundColor:'#D7F4E7',padding:10,marginTop: 200}}>

            <View style={{flex:1}}> 
            <Text> 2 Items </Text>
            </View>

            <View style={{ flex:1,alignItems:'flex-end',justifyContent:'flex-end'}}>
            <Text> Rs 120</Text>
            </View>

        </View>

        <View style={{ backgroundColor:'#D7F4E7',padding:10 ,marginTop: 10 ,borderRadius:50}}>
            <Text style={{ fontSize:12, alignItems:"center",justifyContent:'center'}}> Once you confirm your order, your order will be sent to canteen and food will be prepared soon </Text>

        </View >

        <View style={{ backgroundColor:'#32BA7C',padding:10 ,marginTop: 10,borderRadius:50,alignItems:'center',justifyContent:'center'}}>
          <Text style={{ color:'white'}}> Confirm Order</Text>


        </View>
</View>
 


  )
}

export default CartList