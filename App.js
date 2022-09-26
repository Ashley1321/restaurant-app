import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import image from './assets/logo.PNG';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterUser from './pages/Register';
import ResetPassword from './pages/forgotPassword';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ width: '100%', height: '40%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={image} style={styles.logo} />
      </View>

      <View style={{ width: '100%', height: "60%", backgroundColor: "#2B2C34", borderTopEndRadius: 21, borderTopStartRadius: 21 }}>
        <Text style={styles.signIn}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Adress" />

        <TextInput
          style={styles.input}
          placeholder="Password" />
        <Text style={{ color: "white", textAlign: 'center', margin: 10 }}>Don't Have Account?</Text>

        <Text style={{ color: "white", textAlign: 'center', margin: 10 }}>Forgot Password?</Text>

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
          Sign In
        </Text>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterUser} />
        <Stack.Screen name="forgotPassword" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200
  },
  signIn: {
    color: 'white',
    textAlign: "center",
    fontSize: 20,
    marginTop: 30
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
