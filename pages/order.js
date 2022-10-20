import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable, TouchableOpacity, FlatList, ScrollView
} from "react-native";
import headerPic from '../assets/header.jpg'
import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'

const  Order= ({route,navigation}) => {

  const [orderNumber,setOrderNumber]=React.useState([])
  const UserRef = collection(db,"food Menu")

    const {total}=route.params;
    const {cart}=route.params;
    console.log('cart',cart)

    const getOrder = async () => {
      const order = await getDocs(UserRef)
    
      console.log(order.docs.map((results)=>(results.data())))
      setOrderNumber(order.docs.map((results)=>({...results.data(),id:results.id})));
    }
    useEffect(() => {
       getOrder()
    
    }, []);
    return ( 
        <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
        <View
          style={{width: "100%", height: "45%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
        >
          <Image
            source={headerPic}
            style={styles.logo}
          />
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('cart',{cart:cart,total:total})}>
          <Image
            source={
              require('../assets/back.png')
            }
            style={{width:25,height:25,marginLeft:'auto',marginRight:'auto'}}
          />
          
          </TouchableOpacity>
        
        </View>
            
        <View style={styles.wrapper}>
            <TouchableOpacity style={{width: '53px',height: '5px',background: '#D9D9D9',borderRadius: '3px',marginTop: -15}}></TouchableOpacity>
            
            <View style={styles.card}>
            <Text style={{fontSize:27,fontWeight:600,color:"#95e349"}}>Your Oder is succefully</Text>
            </View>
            <TouchableOpacity >
                    <Text style={{fontSize:27,fontWeight:600,color:"#95e349",textAlign:'center'}}>Please Wait While Still Preparing</Text>
            </TouchableOpacity>
        <View style={styles.bottomView}>
          <Text style={{color:'white',fontSize:18,fontWeight:500,marginLeft:80,marginTop:20,color:"black"}}>Amount due</Text>
          <Text style={{color:'black',fontWeight:500,marginLeft:88}}>{cart.length} Cart</Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={{color:'#95e349',fontWeight:500}}>R{total}.00</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
     
     
     );   
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    logo: {
      width: "100%",
      height: "100%",
    },
    wrapper:{
      width: "100%",
      height: "60%",
      backgroundColor: "black",
      borderTopEndRadius: 21,
      borderTopStartRadius: 21,
      padding: 25,
      position: "absolute",
      bottom: 0, 
      alignItems:'center'
    },
    bottomView:{
        position: 'absolute',
        width: '100%',
        height: '80px',
        left: '0px',
        bottom: 0,
        backgroundColor:"#95e349",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
        },
      checkoutBtn:
      {
      position: 'absolute',
      width: 110,
      height: 34,
      right:30,
      bottom: 22,
      backgroundColor:"black",
      borderRadius: 8,
      textAlign:'center',
      padding:'1.6%'
      },
      back:{
        position: 'absolute',
        width: '52px',
        height: '52px',
        left: '24px',
        top: '41px',
        borderRadius:'50%',
        backgroundColor: '#95e349',
        justifyContent:'center'
      },
      cart:{
        position: 'absolute',
        width: '52px',
        height: '52px',
        right: '30px',
        top: '41px',
        borderRadius:'50%',
        backgroundColor: 'rgba(217, 217, 217, 0.75)',
        justifyContent:'center',
        flexDirection:'row',
      },
      card:
      {
        marginTop:20,
        width:'90%',
        height:150,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:'18',
        alignItems:'center',
        display:'flex',
        justifyContent:"space-around",
        borderRadius:18,
        elevation:3
    }
      
  });
  
 
export default Order;