import { Stack, useRouter } from "expo-router";
import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Popularjobs, ScreenHeaderBtn, Welcome } from "../components";
import { COLORS, SIZES, icons, images } from "../constants";

const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("");
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible : false,
                    headerLeft : ()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} handlePress={() => alert('Button Menu!')}  dimension="60%"/>
                    ),
                    headerRight : ()=>(
                        <ScreenHeaderBtn iconUrl={images.profile} handlePress={() => router.push(`/login`)} dimension="100%"/>
                    ),
                    headerTitle : ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex:1, padding : SIZES.medium}}>
                    <Welcome earchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick = {()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <Popularjobs />
                    {/* <Nearbyjobs /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;