import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailsHeder from './OrderDetailsHeder'

const OrderDetails = ({navigation}) => {
  return (
    <View>
      <OrderDetailsHeder navigation={navigation}/>
    </View>
  )
}

export default OrderDetails