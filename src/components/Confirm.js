import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const Confirm = () => {
  return (

<View>
        <View style={styles.container}>

            <View style={styles.subview1}> 
            <Text> 2 Items </Text>
            </View>

            <View style={styles.subview2}>
            <Text> Rs 120</Text>
            </View>

        </View>

        <View style={styles.confirmCaution}>
            <Text style={styles.confirmCautiontext}> Once you confirm your order, your order will be sent to canteen and food will be prepared soon </Text>

        </View >

        <View style={styles.confirmbutton}>
          <Text style={{ color:'white'}}> Confirm Order</Text>


        </View>
</View>
 


  )
}

export default Confirm

const styles = StyleSheet.create({
  container : { flexDirection:'row',  backgroundColor:'#D7F4E7',padding:10},
  subview1 : {flex:1},
  subview2 : { flex:1,alignItems:'flex-end',justifyContent:'flex-end'},
  confirmCaution : { backgroundColor:'#D7F4E7',padding:10 ,marginTop: 10 ,borderRadius:50},
  confirmCautiontext :{ fontSize:12, alignItems:"center",justifyContent:'center'},
  confirmbutton : { backgroundColor:'#32BA7C',padding:10 ,marginTop: 10,borderRadius:50,alignItems:'center',justifyContent:'center'}

})
