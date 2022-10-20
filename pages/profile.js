import {StyleSheet,Text,View,Image,} from "react-native";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import pic from '../assets/continental.png';
import user from '../assets/user.png';
import React, { useState, useEffect } from "react";
import { addDoc, collection ,getDocs} from 'firebase/firestore';
import { db } from '../config/firebase'

const  Profile= ({navigation}) => {
  const [image, setImage] = React.useState();
  const [userInfo,setData]=React.useState([])
  const UserRef = collection(db,"User Details")

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
        setImage(result.uri);
    }
}
const getUserInfo = async () => {
  const info = await getDocs(UserRef)

  console.log(info.docs.map((results)=>(results.data())))
  setData(info.docs.map((results)=>({...results.data(),id:results.id})));
}

useEffect(() => {
   getUserInfo()

}, []);

    return ( 
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
        <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', borderBottomLeftRadius:50, borderBottomRightRadius: 50 }}>
          <View style={{flexDirection:'row',width:'90%',justifyContent:"space-between",marginTop:50}}>
          <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate('landingPage')}>
          <Image
            source={
              require('../assets/back.png')
            }
            style={{width:25,height:25,marginLeft:'20%',marginRight:'20%',marginTop:'25%'}}
          /></TouchableOpacity>
         
          <Image source={pic} style={styles.logo} />
            </View>
            
            <View style={{ width: '100%', height: '30%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',marginTop:'13%', borderBottomLeftRadius:50, borderBottomRightRadius: 50 }}>
            <TouchableOpacity onPress={pickImage} style={{marginTop:-60}}>
                {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:200 }}/>:
                 <Image source={user}  style={{width:200,height:200, borderRadius:200}} />
                }
            </TouchableOpacity>
            </View>
            
        </View>
        <>
        {
          userInfo.map((user,index)=>(
              <View key={index} style={{ width: '100%', height: "40%", backgroundColor: "black", margin: 30 }}>
                <Text style={styles.signIn}>Welcome</Text>

                <View style={styles.input}>
                  <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{user.email}</Text>
                </View>

                <View style={styles.input}>
                  <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>{user.contact}</Text>
                </View>
                <View>
                  <Text style={{ marginTop: "-78%", textAlign: "center", fontSize: 25, fontWeight: 600 }}>{user.firstName}</Text>
                  <Text style={{ textAlign: "center", fontSize: 25, fontWeight: 600 }}>{user.secondName}</Text>
                </View>
              </View>
           
          ))
        }</>
        

      </View>
     );   
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      logo: {
        width: '100px',
        height: '100px',
        marginTop:"-18%",
        marginLeft:"-15%"
      },
      signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 30,
        fontSize:24,
        fontWeight:600
      },
      input: {
        width:'90%',
        color: 'white',
        borderWidth: 4,
        padding: 10,
        margin: 3,
        borderBottomColor: 'white',
        borderEndColor: 'black',
        borderLeftColor: "black",
        borderTopColor: 'black',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius:8,
      },
      back:{
        width: '52px',
        height: '52px',
        borderRadius:'50%',
        backgroundColor: '#95e349',
        marginTop:-30
      },
      
  });
  
 
export default Profile;