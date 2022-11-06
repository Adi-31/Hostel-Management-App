import { useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "./CartHeader"; 
import CartContent2 from "./CartContent2";
import OptDinner from "./OptDinner";
import CartList from "./Confirm"; 

const listOfCart = [
     {
       id: 1,
       foodItem: "Porotta & Chicken Curry Porotta & Chicken Curry",
     },
     {
       id: 2,
       title: "Biriyani Rice",
     },
     
   ];

   
const Details = ({navigation}) => {
     const [count , setCount]=useState(0) 
     const increment = () => setCount(prevCount => prevCount + 1);
     const decrement = () => setCount(prevCount => prevCount - 1);
     const CartContent = () => {
        
        
          return (
            <View style={{flexDirection :'row', marginVertical : 10}}>
              <View style={{flex : 3 , backgroundColor : 'white',padding : 8,marginLeft:10}}>
                <Text style={{fontWeight : '700', fontSize : 15}}>
                  Porotta & Chicken Curry ..
                </Text>
                <Text style={{fontWeight : '400', fontSize : 10}}> 2 porotta 2 chicken curry + tea</Text>
        
              </View>
              <View style={{flex : 2, backgroundColor : 'white',alignItems: 'center', justifyContent : 'center',flexDirection:'row'}}>
              <TouchableOpacity style ={{padding : 6}} onPress= {decrement}>
                <Text style={{fontSize: 25}}> -</Text>
              </TouchableOpacity>
              <View>
                <Text>
                  {count}
                </Text>
              </View>
        
              <TouchableOpacity style ={{padding : 6}} onPress = {increment}>
                <Text style={{fontSize: 18}}>+</Text>
              </TouchableOpacity>
        
        
              </View>
              
              <View style={{flex : 1 ,backgroundColor : 'white', alignItems: 'center', justifyContent : 'center'}}>
              <Text>
                 Rs 60
                </Text>
              </View>
              
            </View>
          )
        }
     return (

     <View>
     {/* <View style={{ backgroundColor: "#3358F9" }}> */}
      <CartHeader navigation={navigation}/>
     {/* </View> */}
      {/* <CartContent/> */}
      <FlatList data={listOfCart}
      keyExtractor={item => item.id}
         renderItem={CartContent}
     />
     <CartContent2/>
     <OptDinner/>
     <CartList/>
     
     
     
     </View>
     )
   

}
export default Details;
