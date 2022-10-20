
import { StyleSheet, Text, View, TextInput, Image,Alert, Pressable,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import image from './assets/continental.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterUser from './pages/Register';
import ResetPassword from './pages/forgotPassword';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './config/firebase';
import Landing from './pages/landingPage';
import More from './pages/moreDetails';
import Cart from './pages/cart';
import Order from './pages/order';
import Profile from './pages/profile';





function HomeScreen() {
  const navigation = useNavigation();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  //navigating to landing page
  const login = () => { 
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      if (email !== "" && password !== ""){
        navigation.navigate("landingPage");
        Alert.alert("Successfully Logged In")
      }else{
        Alert.alert("Inputs can not be empty")
        console.log("Inputs can not be empty");
      }

    }).catch((error)=>{
      console.log(error);
    })
  
  }
  //link to sign up page
  const signUp = () => {
    navigation.navigate('Register')
  }
  //link to reset password
  const forgotPassword = () => {
    navigation.navigate('forgotPassword')
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
      <View style={{ width: '100%', height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderBottomLeftRadius:50, borderBottomRightRadius: 50  }}>
        <Image source={image} style={styles.logo} />
      </View>

      <View style={{ width: '100%', height: "50%", backgroundColor: "black"}}>
        <Text style={styles.signIn}>Sign In</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setEmail(text)}
          value={email}
          placeholder="Email Adress" />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Password" />
        <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={signUp}>
          Register Account
        </Text>

        <Text style={{ color: "white", textAlign: 'center', margin: 10 }} onPress={forgotPassword}>
          Forgot Password?
        </Text>
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
          }} onPress={ login }>
            Sign In
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='forgotPassword' screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="landingPage" component={Landing}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterUser} />
      <Stack.Screen name="forgotPassword" component={ResetPassword} />
      <Stack.Screen name="moreDetails" component={More} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="order" component={Order}/> 
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
    width: 250,
    height: 250
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
    borderEndColor: 'black',
    borderLeftColor: "black",
    borderTopColor: 'black'
  },
});
