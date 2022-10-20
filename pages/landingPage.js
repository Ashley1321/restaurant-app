import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,TouchableOpacity, FlatList, ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import { addDoc, collection ,getDocs} from 'firebase/firestore';
import { db } from '../config/firebase'
import purchase from '../assets/cart.png'

const Landing = ({navigation}) => {
  const [cartItems,setCartItems]=React.useState([]);
  const [cartCount,setCartCount]=React.useState([]);
  const [data,setData]=React.useState([])
  const menuRef = collection(db,"food Menu")

const totalToPay = cartItems.reduce((amount, product)=> amount + product.price * product.quantity,0)

const getMenu = async () => {
  const data = await getDocs(menuRef)

  console.log(data.docs.map((results)=>(results.data())))
  setData(data.docs.map((results)=>({...results.data(),id:results.id})));
}

useEffect(() => {
   getMenu()

}, []);

const filtering=["Main Meal","Drinks","Deset"]
const handleFilter=(index,x)=>
{
  setData(data.filter((type,i)=>{
       if (index == "Main Meal") {
          return type
      }
      else if (data[i].category==index) 
     {
       return type;
     }
   })  
  ) 
}

const handleAdd=(index,item)=>{
const itemExist= cartItems.find((product)=>product.foodName===item.foodName);

if(itemExist)
{
  setCartItems(cartItems.map((product)=>product.foodName===item.foodName?{...itemExist,quantity:itemExist.quantity+1}:product))
  console.log('already exits and added')
}
else{
  setCartItems([...cartItems,{...item,quantity:1}])
  console.log('added')
}
setCartCount([...cartItems,{...item,quantity:1}])
  console.log(cartItems);
}
const handleBack=()=>{alert('Are you sure you ?')
navigation.navigate('Home');}
return (
  <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
    <View
      style={{width: "100%", height: "25%", backgroundColor: "black", alignItems: "center", justifyContent: "center"}}
    >
      <Image
        source={
          'https://www.thespruceeats.com/thmb/5eGhmcnXCOt4svFWRtsW3bu57kM=/5154x2899/smart/filters:no_upscale()/spiced-flat-iron-steak-with-roasted-yokon-gold-potatoes-121841886-58a729d33df78c345b9e1580.jpg'
        }
        style={styles.logo}
      />
      <TouchableOpacity style={styles.back} onPress={handleBack}>
      <Image
        source={
          require('../assets/logout.png')
        }
        style={{width:25,height:25,marginLeft:'auto',marginRight:'auto'}}
      />
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.cart} onPress={()=>{navigation.navigate('cart',{total:totalToPay,cart:cartItems})}}>
      <Image
        source={
          require('../assets/cart.png')
        }
        style={{width:30,height:30,marginTop:10}}
      />
      <Text style={{fontSize:17,marginTop:23,color:'black'}}>{cartCount.length}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.user} onPress={()=>{navigation.navigate('profile',{total:totalToPay,cart:cartItems})}}>
      <Image
        source={
          require('../assets/user-3296.png')
        }
        style={{width:50,height:50,marginTop:0,borderRadius:'100%'}}
      />
      </TouchableOpacity>
    </View>

    <View style={styles.wrapper}>
    <Text style={{ fontWeight: 700, fontSize: 20,color:'#95e349',textAlign:'center'}}>The Continental Cousine</Text>
      <View style={{width:'88%',marginTop:15, display:'flex',flexDirection:'row'}}>
         {filtering.map((type,index)=>(
                     <TouchableOpacity key={index} style={styles.filter} onPress={()=>handleFilter(type,index)}>
                     <Text style={{fontWeight:500,color:'#95e349'}}>{type}</Text>
                     </TouchableOpacity>
         ))}
      </View>
  <FlatList
    data={data}
    renderItem={({item,index}) =>(
      <TouchableOpacity key={index} style={{marginLeft:"4.5%",marginTop:20,alignItems:'center',elevation:3}} onPress={()=>{navigation.navigate('moreDetails',{data:data[index],total:totalToPay,cart:cartItems})}}>
      <Image source={item.image} style={{ width: 140, height: 140,}} />
      <View  style={{borderColor:'#95e349',borderWidth:2, height:"27%",width:"100%"}}>
      <Text  style={{fontWeight:500,color:"#95e349",textAlign:'center'}}>{item.foodName}</Text>
      <Text style={{fontWeight:500,color:"#95e349",textAlign:'center'}}> R{item.price}</Text>
    
      <TouchableOpacity style={styles.btnAdd} onPress={()=>handleAdd(index,item)}>
          <Image source={purchase} style={{width:30,height:30,marginLeft:'30%',marginTop:'5%'}}/>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>        
    )}numColumns={2} style={{width:"100%"}}/>   
    
    </View>
    <View style={styles.bottomView}>
      <Text style={{color:'black',fontSize:18,
      marginLeft:80,marginTop:20}}>R {totalToPay}.00</Text>
      <Text style={{color:'black',
      
      marginLeft:88}}>{cartItems.length} Cart</Text>
      <TouchableOpacity style={styles.checkoutBtn} onPress={()=>{navigation.navigate('order',{total:totalToPay,cart:cartItems})}}>
        <Text style={{color:'#95e349'}}>Purchase</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    height: "120%",
  },
  wrapper:{
         width: "100%",
         height: "75%",
         backgroundColor: "black",
        borderTopEndRadius: 21,
         borderTopStartRadius: 21,
         padding: 25,
       position: "absolute",
        bottom: 0, 
         alignItems:'center',
      },
  btnAdd:{
    backgroundColor:"#95e349",
    borderWidth:2,
    borderColor:"black",
    width:80,
    height:40,
    borderRadius:20,
    marginLeft:30,
    marginTop:4,
    textAlign:"center",
  },
  filter:{
    width:100,
    height:30,
    textAlign:"center"
  },
  bottomView:{
    position: 'absolute',
         width: '100%',
         height: '80px',
         left: '0px',
         bottom: 0,
         backgroundColor: '#95e349',
         borderTopLeftRadius:10,
         borderTopRightRadius:10
         },
    checkoutBtn:{
      position: 'absolute',
      width: 110,
           height: 34,
          right:30,
           bottom: 22,
           backgroundColor: 'black',
           borderRadius: 8,
           textAlign:'center',
           padding:'1.6%'
    },
    back:{
      position: "absolute",
      width: 50,
      height: 50,
      left: 22,
      top: 41,
      borderRadius:25,
      backgroundColor: "#95e349",
      justifyContent:"center"
    },
   
    cart:{
      position: "absolute",
      width: 50,
      height: 50,
      left: 227,
      top: 41,
      borderRadius:25,
      backgroundColor: "#95e349",
      justifyContent:"center",
      flexDirection:"row"
    },
    user:{
      position: "absolute",
      width: 50,
      height: 50,
      left: 290,
      top: 41,
      borderRadius:25,
      backgroundColor: "#95e349",
      justifyContent:"center",
      flexDirection:"row"
    }
  });
 

export default Landing;
