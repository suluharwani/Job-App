import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, BackHandler, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { XMarkIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userLogin } from '../../src/api/userApi';
import { themeColors } from '../../theme';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const HandleLogin= () =>{
    if (email==''||password=='') {
    Alert.alert(`Email/password tidak boleh kosong`)
      
    } else {
      userLogin({
        email:email,
        password:password
      }).then((result)=>{
        if (result.status == 200) {
          console.log(result.data.token)
          console.log(result.data.data)
          Alert.alert('login ok')
        } else {
          Alert.alert('login gagal')
          
        }
      })
    }
    // Alert.alert(`${email} ${password}`)
  }
  return (
    <ScrollView className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
       
      <SafeAreaView  className="flex ">
        
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={()=> BackHandler.exitApp()} 
          className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
            <XMarkIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View  className="flex-row justify-center">
          <Image source={require('../../assets/images/login.png')} 
          style={{width: 200, height: 200}} />
        </View>
        
        
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
        className="flex-1 bg-white px-8 pt-8">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
              placeholder="email"
              onChangeText={(email) => setEmail(email)}
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput 
              className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder="password"
              // secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity className="flex items-end">
              <Text className="text-gray-700 mb-5">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="py-3 bg-yellow-400 rounded-xl" onPress={()=> HandleLogin()}>
                <Text 
                    className="text-xl font-bold text-center text-gray-700"
                >
                        Login
                </Text>
             </TouchableOpacity>
            
          </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">Or</Text>
          <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/icons/google.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/icons/apple.png')} className="w-10 h-10" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
              <Image source={require('../../assets/icons/facebook.png')} className="w-10 h-10" />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                  Belum punya akun?
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('register')}>
                  <Text className="font-semibold text-yellow-500"> Sign Up</Text>
              </TouchableOpacity>
          </View>
          
      </View>
    </ScrollView>
    
  )
}