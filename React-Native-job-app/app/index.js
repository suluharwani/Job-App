import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { LoginScreen, Splash } from "../components";
import { SIZES } from "../constants";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

function SplashScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Splash/>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

// function SimpleSignInScreen({ navigation, route }) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const { setUserToken } = route.params;
  
//   return (
//     <View>
//       <Text>Email</Text>
//       <TextInput style={styles.input} onChangeText={setEmail} />
//       <Text>Password</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={setPassword}
//         placeholder="Password"
//         secureTextEntry={true}
//       />
//       <Button title="Sign Up" onPress={() => setUserToken('token')} />
//     </View>
//   );
// }

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex:1, padding : SIZES.medium}}>
        {userToken == null ? (
          // No token found, user isn't signed in
        //   <Stack.Screen
        //     name="SignIn"
        //     component={SimpleSignInScreen}
        //     options={{
        //       title: 'Sign in',
        //     }}
        //     initialParams={{ setUserToken }}
        //   />
        <LoginScreen/>
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </View>
    </ScrollView>
  );
}
