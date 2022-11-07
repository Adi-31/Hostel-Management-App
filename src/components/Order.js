import { View, Text, FlatList,TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import Header from './Header'


const OrderMenu = [
  {
    id: 212,
    title: "4 item",
    foodtime: "Breakfast",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 213,
    title: "3 item",
    foodtime: "Lunch",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 214,
    title: "2 item",
    foodtime: "Dinner",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 216,
    title: "4 item",
    foodtime: "Breakfast",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 217,
    title: "4 item",
    foodtime: "Breakfast",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 218,
    title: "4 item",
    foodtime: "Breakfast",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
  {
    id: 219,
    title: "4 item",
    foodtime: "Breakfast",
    cost: 30,
    time: "28-10-2022" ,
    foodlist: "Porotta,Chicken Curry, Tea ...."
  },
];
const OrderCard = ({item, navigation}) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container2}>
        <Text style={styles.ordertext}>Order ID : {item.id}</Text>
        <Text style={styles.ordertitle}>{item.title}</Text>
        <Text style={styles.ordertext}>{item.foodtime}</Text>
        <Text style={styles.ordertext}>{item.foodlist}</Text>
      </View>
      <View style={styles.container3}>
        <Text  style={styles.ordertime}>{item.time}</Text>
        <Text style={styles.ordercost}>₹{item.cost}</Text>
        
        <TouchableOpacity
        style={styles.touch}
        onPress={() => navigation.navigate("Home")}
      >
          <Text style={styles.textviewdetails}>VIEW DETAILS</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const Order = ({navigation}) => {
  return (
    <View>
      <Header />
      <FlatList data={OrderMenu}  
        keyExtractor={(item) => item.id}
        renderItem={OrderCard}
        style={styles.flatList}
        navigation={navigation}/>
    </View>
  )
}

export default Order

const styles=StyleSheet.create({
  container1 :{flexDirection:"row" , padding : 5},
  container2 : {  flex : 1 , flexDirection : "column", backgroundColor: "white" , padding:10},
  ordertext : {fontWeight: '400', fontSize: 10 , color : "black", marginBottom: 5},
  ordertitle : {fontWeight: '700', fontSize: 30 , color : "black", marginBottom : 5},
  container3 : {  flex : 1 , backgroundColor: "white", padding:10, alignItems : "flex-end"},
  ordertime : {fontWeight: '400', fontSize: 10 , color : "#0C0F17", marginBottom: 5},
  ordercost : {fontWeight: '700', fontSize: 30 , color : "#32BA7C", marginTop: 5 ,marginBottom : 5},
  touch : { borderRadius: 8,justifyContent: "center",},
  textviewdetails : {fontWeight: '400', fontSize: 10 , color : '#3358F9', marginTop : 5},
  flatList : {backgroundColor: "white", paddingHorizontal: 10, marginBottom:60}

})