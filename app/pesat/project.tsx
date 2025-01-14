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
            <Text style={tw`font-extrabold text-amber-700 text-center text-2xl `}> ALBUM PROJECT </Text>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                <Link href="/pesat/detailv" >
                        <Image source={require('../../assets/images/4.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Niki's Album</Text>
                </View>
                <View>
                    <Link href="/pesat/detailv" >
                <Image source={require('../../assets/images/5.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>SZA's Album</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detailv" >
                        <Image source={require('../../assets/images/6.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Daniel Caesar Albums</Text>
                </View>
                <View>
                    <Link href="/pesat/detailv">
                <Image source={require('../../assets/images/7.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Sachiko Albums</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detailv">
                        <Image source={require('../../assets/images/8.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>1975 albums</Text>
                </View>
                <View>
                    <Link href="/pesat/detailv">
                <Image source={require('../../assets/images/9.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Nara's album</Text>
                </View>
            </View>

            <View style={tw`justify-around flex-row mt-5`}>
                <View style={tw`flex-col g`}>
                    <Link href="/pesat/detailv" >
                        <Image source={require('../../assets/images/10.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} />
                    </Link> 
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Frank Ocean's album</Text>
                </View>
                <View>
                    <Link href="/pesat/detailv">
                <Image source={require('../../assets/images/11.jpg')} style={tw`w-40 h-40 rounded shadow-2xl`} ></Image>
                    </Link>
                    <Text style={tw`text-center text-amber-700 font-bold mt-3`}>Jiro's album</Text>
                </View>
            </View>

            </ScrollView>
        </SafeAreaView>

    )
};