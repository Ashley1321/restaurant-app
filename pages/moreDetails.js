import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,TouchableOpacity, FlatList, ScrollView
} from "react-native";

const  More= ({route,navigation}) => {
  const {data}=route.params;
  const {total}=route.params;
  const {cart}=route.params;
  console.log('cart',cart)


  console.log(data)
  return ( 
      <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <View
        style={{width: "100%", height: "45%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}
      >
        <Image
          source={data.image}
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
          <View style={{flexDirection:'row'}}>
          <Text style={{color:'#95e349',fontWeight:700,fontSize:24,marginTop:20,textAlign:"left"}}>{data.foodName}</Text>
          </View>
          <View style={{textAlign:'center',width:'85%',padding:'1%'}}>
            <Text style={{fontSize:20,fontWeight:500,color:'#95e349',marginTop:20}}>Description:</Text>
            <Text style={{fontSize:17,color:'#95e349',marginTop:20}}>{data.description}</Text>
            <Text style={{fontSize:20,fontWeight:500,color:'#95e349',marginTop:20}}>Size: {data.size}</Text>
              <Text style={{color:'#95e349',fontWeight:700,fontSize:30,marginTop:20}}>R{data.price}</Text>
              <Text> each</Text>
          </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.checkoutBtn} onPress={()=>{navigation.navigate('order',{cart:cart,total:total})}}>
          <Text style={{color:'#95e349',fontWeight:500}}>Purchase</Text>
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
      backgroundColor: '#95e349',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
  },
  checkoutBtn:{
    position: 'absolute',
    width: 110,
    height: 34,
    right:"35%",
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
  }
});


export default More;