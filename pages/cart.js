import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,TouchableOpacity, FlatList, ScrollView
} from "react-native";
import headerPic from '../assets/header.jpg'

const  Cart= ({route,navigation}) => {
  const {data}=route.params;
  const {total}=route.params;
  const {cart}=route.params;
  console.log('cart',cart)


  return ( 
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{width: "100%", height: "30%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
      >
         <Image
          source={headerPic}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('landingPage')}>
        <Image
          source={
            require('../assets/back.png')
          }
          style={{width:25,height:25,marginLeft:'auto',marginRight:'auto'}}
        />
        
        </TouchableOpacity>
      
      </View>

      <View style={styles.wrapper}>
          <TouchableOpacity style={{width: '53px',height: '5px',background: '#95e349',borderRadius: '3px',marginTop: -15}}></TouchableOpacity>
         <Text style={{fontSize:27,fontWeight:600,textAlign:'center',color:'#95e349'}}>My Cart</Text>

         <FlatList
      data={cart}
      renderItem={({item,i}) =>(
          <View key={i} style={styles.card}>
          <Image
          source={item.image} style={{width:80,height:80}}/>
         <View style={{alignItems:'center'}}>
         <Text style={{fontSize:22,fontWeight:700,color:'#95e349'}}>{item.foodName}</Text>
          <Text style={{fontSize:18,fontWeight:500,color:'#95e349'}}>R{item.price}.00</Text>
         </View>
          <View>
          <Text style={{fontSize:28,fontWeight:700}}></Text>
          <Text style={{fontSize:22,fontWeight:700,color:"#95e349"}}>{item.quantity}</Text>
          <Text style={{fontSize:28,fontWeight:700}}></Text>
          </View>
      </View>
      )} style={{width:'100%'}}/> 

      <View style={styles.bottomView}>
        <Text style={{color:'white',fontSize:18,fontWeight:500,marginLeft:80,marginTop:20,color:"black"}}>R {total}.00</Text>
        <Text style={{color:'#D9D9D9',fontWeight:500,marginLeft:88,color:"black"}}>{cart.length} Cart</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={()=>{navigation.navigate('order',{cart:cart,total:total})}}>
          <Text style={{color:'white',fontWeight:500,color:'#95e349'}}>Purchase</Text>
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
    height: "80%",
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
      backgroundColor: '#95e349',
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
    backgroundColor: 'black',
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
      flexDirection:'row'
    },
    card:{
      marginTop:2,
      borderRadius:16,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100%',
      height:90,
    }
});


export default Cart;