import { View, Text, FlatList,TouchableOpacity } from 'react-native'
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
    <View style={{flexDirection:"row" , padding : 5}}>
      <View style={{  flex : 1 , flexDirection : "column", backgroundColor: "white" , padding:10}}>
        <Text style={{fontWeight: '400', fontSize: 10 , color : "black", marginBottom: 5}}>Order ID : {item.id}</Text>
        <Text style={{fontWeight: '700', fontSize: 30 , color : "black", marginBottom : 5}}>{item.title}</Text>
        <Text style={{fontWeight: '400', fontSize: 10 , color : "black", marginBottom: 5}}>{item.foodtime}</Text>
        <Text style={{fontWeight: '400', fontSize: 10 , color : "black", marginBottom: 5}}>{item.foodlist}</Text>
      </View>
      <View style={{  flex : 1 , backgroundColor: "white", padding:10, alignItems : "flex-end"}}>
        <Text  style={{fontWeight: '400', fontSize: 10 , color : "#0C0F17", marginBottom: 5}}>{item.time}</Text>
        <Text style={{fontWeight: '700', fontSize: 30 , color : "#32BA7C", marginTop: 5 ,marginBottom : 5}}>₹{item.cost}</Text>
        
        <TouchableOpacity
        style={{
          borderRadius: 8,
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Home")}
      >
          <Text style={{fontWeight: '400', fontSize: 10 , color : '#3358F9', marginTop : 5}}>VIEW DETAILS</Text>
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
        style={{backgroundColor: "white",
        paddingHorizontal: 10, marginBottom:60}}
        navigation={navigation}/>
    </View>
  )
}

export default Order