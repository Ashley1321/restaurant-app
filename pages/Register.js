import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import icon from '../assets/logo.png'


function RegisterUser() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '25%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: "75%", backgroundColor: "#2B2C34", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
                <Text style={styles.signIn}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name" />

                <TextInput
                    style={styles.input}
                    placeholder="Second Name" />

                <TextInput
                    style={styles.input}
                    placeholder="Email Adress" />

                <TextInput
                    style={styles.input}
                    placeholder="Phone Number" />

                <TextInput
                    style={styles.input}
                    placeholder="Create Password" />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password" />
                <Text style={{ color: "white", textAlign: 'center', margin: 10 }}>Already has Account?</Text>

                <Text style={{
                    backgroundColor: '#E85800',
                    color: 'white',
                    textAlign: 'center',
                    padding: 7,
                    marginTop: 10,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 5
                }}>
                    Register
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
        width: 150,
        height: 150
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
        padding: 10,
        margin: 3,
        borderBottomColor: 'white',
        borderEndColor: '#2B2C34',
        borderLeftColor: "#2B2C34",
        borderTopColor: '#2B2C34'
    },
});

export default RegisterUser