import {useState} from "react";
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import icon from '../assets/continental.png';
import {useNavigation} from '@react-navigation/native';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../config/firebase';




function ResetPassword() {
    const navigation = useNavigation();

    const [email,setEmail] = useState('');

    const reset = () => {

        sendPasswordResetEmail(auth,email).then(()=>{
            if (email !== '') {
                navigation.navigate("landingPage")
                Alert.alert('Check Your Emails')
                console.log("succefully reset")
            }else{
                Alert.alert('Enter Email Adress')
                console.log('Input Empty')
            }
      
          }).catch((error)=>{
            console.log(error);
          })
       
        
    }

    const signIn = () =>{
        navigation.navigate('Home')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
            <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',  borderBottomLeftRadius:50, borderBottomRightRadius: 50  }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: "50%", backgroundColor: "black", }}>
                
                    <Text style={styles.signIn}>Reset Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>setEmail(text)}
                        value={email}
                        placeholder="Email Adress" />
                    <TouchableOpacity>
                        <Text style={{
                            backgroundColor: '#95e349',
                            color: 'white',
                            textAlign: 'center',
                            padding: 7,
                            marginTop: 10,
                            width: "50%",
                            alignSelf: 'center',
                            borderRadius: 5
                        }} onPress={reset} >
                            Reset
                        </Text>
                    </TouchableOpacity>
                    
                
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    padding: 7,
                    marginTop: 50,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 5
                }} onPress={signIn}>
                    Sign In
                </Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        marginTop: -60
    },
    signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 35
    },
    input: {
        color: 'white',
        borderWidth: 3,
        padding: 10,
        margin: 30,
        borderBottomColor: 'white',
        borderEndColor: 'black',
        borderLeftColor: "black",
        borderTopColor: 'black',

    },
});

export default ResetPassword