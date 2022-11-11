import { View, Text } from 'react-native'
import React from 'react'
import OrderDetailsHeder from './OrderDetailsHeder'
import { StyleSheet } from 'react-native-web'
import OrderDetailsContent from './OrderDetailsContent'

const OrderDetails = ({navigation}) => {
  return (
    <View>
      <OrderDetailsHeder navigation={navigation}/>
     <View style={styles.container}>
        <Text style={styles.containerText}>BILL DETAILS</Text>
        <OrderDetailsContent/>
      </View> 
  </View>
  )
}


export default OrderDetails

const styles=StyleSheet.create({
  container : {},
  containerText : {padding : 10, fontWeight:'400', fontSize : 12 }, 
  deatialsView : {},
  

})