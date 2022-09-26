import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import icon from '../assets/logo.png'


function ResetPassword() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={icon} style={styles.logo} />
            </View>

            <View style={{ width: '100%', height: "50%", backgroundColor: "#2B2C34", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
                <View style={{
                    width: '90%',
                    height: '80%', backgroundColor: '#2B2C34',
                    alignSelf: "center",
                    marginTop: -120,
                    borderWidth: 1,
                    borderColor: "white",
                    borderRadius: 12
                }}>
                    <Text style={styles.signIn}>Reset Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Adress" />

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
                        Reset
                    </Text>
                </View>
                <Text style={{
                    backgroundColor: '#E85800',
                    color: 'white',
                    textAlign: 'center',
                    padding: 7,
                    marginTop: 50,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 5
                }}>
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
        width: 150,
        height: 150,
        marginTop: -100
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
        margin: 30,
        borderBottomColor: 'white',
        borderEndColor: '#2B2C34',
        borderLeftColor: "#2B2C34",
        borderTopColor: '#2B2C34',

    },
});

export default ResetPassword