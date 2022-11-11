import { View, Text } from 'react-native'
import React from 'react'

const OrderDetailsContent = () => {
  return (
    <View style={{backgroundColor : 'white', padding : 10}}>
        <View style={{borderBottomWidth : 1, borderBottomColor : 'black', borderStyle : 'dashed', paddingBottom: 5}}>

        <View style={{flexDirection: 'row', paddingTop : 5}}>
            <View style={{flex : 1 , alignItems : 'flex-start', justifyContent : 'flex-start', }}>
                <Text style >Porotta & Beef</Text>
            </View> 
            <View style={{flex : 1 , alignItems : 'flex-end', justifyContent : 'flex-end'}}>
                <Text>₹60</Text>
            </View>
        </View>
     <View style={{flexDirection: 'row', paddingTop : 5}}>
            <View style={{flex : 1 , alignItems : 'flex-start', justifyContent : 'flex-start'}}>
                <Text style >Biriyani Rice</Text>
            </View> 
            <View style={{flex : 1 , alignItems : 'flex-end', justifyContent : 'flex-end'}}>
                <Text>₹60</Text>
            </View>
    </View>
    <View style={{flexDirection: 'row', paddingTop : 5}}>
            <View style={{flex : 1 , alignItems : 'flex-start', justifyContent : 'flex-start'}}>
                <Text style >Tea</Text>
            </View> 
            <View style={{flex : 1 , alignItems : 'flex-end', justifyContent : 'flex-end'}}>
                <Text>₹10</Text>
            </View>
    </View>
        </View>
    <View style={{flexDirection: 'row', marginBottom : 10}}>
            <View style={{flex : 1 , alignItems : 'flex-start', justifyContent : 'flex-start', paddingTop : 10}}>
                <Text style >Total</Text>
            </View> 
            <View style={{flex : 1 , alignItems : 'flex-end', justifyContent : 'flex-end'}}>
                <Text>₹130</Text>
            </View>
    </View>
    </View>
  )
}

export default OrderDetailsContent