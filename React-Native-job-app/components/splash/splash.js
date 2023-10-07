import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../../theme'

export default function Splash() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
        <View className="flex-1 flex justify-around my-4">
            <Text 
                className="text-white font-bold text-4xl text-center">
                Selamat Datang
            </Text>
            <View className="flex-row justify-center">
                <Image source={require("../../assets/images/welcome.png")}
                    style={{width: 350, height: 350}} />
            </View>
 
        </View>
    </SafeAreaView>
  )
}