import { View, Text ,TouchableOpacity} from 'react-native'
import { COLORS, SIZES } from "../constants/theme";
import React from 'react'
import SquareButton from './SquareBtn';

export default function OptDinner() {
  return (
    <View style={{backgroundColor:'white',padding:10,marginTop: 10}}>
        <View style={{borderRadius:10,backgroundColor:'#F5B80D'}}>

            <View style ={{flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
                <SquareButton/>
                <Text style={{fontSize:25,fontWeight:'bold'}}>  Opt for Dinner</Text>
            </View>
            <View style ={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:10,marginLeft:35}}>The food marked as dinner in your current cart will be marked as your prefference for dinner too </Text>

            </View>
        </View>
      
    </View>
  )
}