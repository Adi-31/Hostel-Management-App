import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import { COLORS, SIZES } from "../constants/theme";
import React from 'react'
import SquareButton from './SquareBtn';

export default function OptDinner() {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>

            <View style ={styles.buttonview}>
                <SquareButton/>
                <Text style={styles.opt}>  Opt for Dinner</Text>
            </View>
            <View style ={styles.foodview}>
            <Text style={styles.foodtext}>The food marked as dinner in your current cart will be marked as your prefference for dinner too </Text>

        </View>
      </View>

    </View>
  )
}

const styles=StyleSheet.create({
  container :{backgroundColor:'white',padding:10} ,
  container1 : {borderRadius:10,backgroundColor:'#FEF4DB', borderColor: '#F5B80D', borderWidth:1,padding:7},
  buttonview : {flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start',},
  opt : {fontSize:25,fontWeight:'bold', color : '#F5B80D' },
  foodview : {alignItems:'center',justifyContent:'center'},
  foodtext : {fontSize:10,marginLeft:30}
})
