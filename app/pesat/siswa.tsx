import { Image, StyleSheet, Platform, View, Text, ImageBackground, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Project() {
    return (
        <SafeAreaView>
            <ScrollView>
            <Text style={tw`font-extrabold text-amber-700 text-center text-2xl `}> TRAINEE GALLERY </Text>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detail" >
                        <Image source={require('../../assets/images/2.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold`}>Baek Song Min</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
                <View>
                    <Link href="/pesat/detail">
                <Image source={require('../../assets/images/1.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold`}>Minatozaki Sana</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detail" >
                        <Image source={require('../../assets/images/12.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold`}>Hwang In Yura</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
                <View>
                    <Link href="/pesat/detail">
                <Image source={require('../../assets/images/13.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold`}>Da Eun</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detail" >
                        <Image source={require('../../assets/images/14.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold`}>Ji So Hee</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
                <View>
                    <Link href="/pesat/detail">
                <Image source={require('../../assets/images/15.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold`}>Kim Yerim Minseo</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detail" >
                        <Image source={require('../../assets/images/16.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold`}>Ha Yeop Rin</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
                <View>
                    <Link href="/pesat/detail">
                <Image source={require('../../assets/images/17.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold`}>Cha Jieun</Text>
                    <Text style={tw`text-center text-gray-700 `}> Desc..</Text>
                </View>
            </View>

            </ScrollView>
        </SafeAreaView>

    )
};