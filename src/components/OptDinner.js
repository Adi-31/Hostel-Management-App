import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from "../constants/theme";
import React from 'react'
import SquareButton from './SquareBtn';

export default function OptDinner() {
  return (
    <View style={{ backgroundColor: 'white', padding: 10, marginTop: 10 }}>
      <View style={styles.container}>
        <SquareButton />

        <View style={styles.description}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Opt for Dinner</Text>
          <Text style={{ fontSize: 10 }}>The food marked as dinner in your current cart will be marked as your prefference for dinner too </Text>

        </View>
      </View>

    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#F5B80D',
    padding: 10,
    alignItems : 'flex-start'
  },
  description : {
    flex : 1,
    flexDirection : 'column',
  }


}
