import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity, Platform, Button } from 'react-native';
import icon from '../assets/continental.png';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import * as ImagePicker from 'expo-image-picker';
import user from '../assets/user.png';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase'




function RegisterUser() {
    const navigation = useNavigation();

    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setconfirmPassword] = React.useState('');
    const [image, setImage] = React.useState();
    const addUserRef = collection(db, 'User Details')

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

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            const signUpDetails = {
                firstName:firstName,
                secondName:secondName,
                contact:contact,
                email:email
            }

            addDoc(addUserRef,signUpDetails).then(()=>{
                console.log("available");
            }).catch((err)=>{
                console.log(err);
            })

            if (password === confirmPassword) {
                navigation.navigate("Landing")
                Alert.alert("Successfully Logged In")
            } else {
                Alert.alert('Passwords do not match ')
                console.log('Passwords do not match ');
            }

        }).catch((error) => {
            console.log(error);
        })

    }


    const signIn = () => {
        navigation.navigate("Home")
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
            <View style={{ width: '100%', height: '10%', backgroundColor: 'white', alignItems: 'end', justifyContent: 'center' }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: '30%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius:50, borderBottomRightRadius: 50 }}>
            <TouchableOpacity onPress={pickImage} style={{marginTop:-60}}>
                {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200,borderRadius:200 }}/>:
                 <Image source={user}  style={{width:200,height:200, borderRadius:200}} />
                }
            </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: "60%", backgroundColor: "black",  }}>
                <Text style={styles.signIn}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    placeholder="First Name" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setSecondName(text)}
                    value={secondName}
                    placeholder="Second Name" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="Email Adress" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setContact(text)}
                    value={contact}
                    placeholder="Phone Number" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    value={password}
                    placeholder="Create Password" />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setconfirmPassword(text)}
                    secureTextEntry
                    value={confirmPassword}
                    placeholder="Confirm Password"
                />

                <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={signIn} >
                    Sign In
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        backgroundColor: '#95e349',
                        color: 'white',
                        textAlign: 'center',
                        padding: 7,
                        marginTop: -1,
                        width: "50%",
                        alignSelf: 'center',
                        borderRadius: 5
                    }} onPress={register} >
                        Register
                    </Text>

                </TouchableOpacity>


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
        width: 100,
        height: 100,
        marginTop:20
    },
    signIn: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
        marginTop: 10
    },
    input: {
        color: 'white',
        borderWidth: 3,
        padding: 8,
        margin: 3,
        borderBottomColor: 'white',
        borderEndColor: 'black',
        borderLeftColor: "black",
        borderTopColor: 'black'
    },
});

export default RegisterUser