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
            <View>
                <Image source={require('../../assets/images/18.jpg')}  style={tw`w-70 h-70 ml-15 shadow-2xl rounded-lg`}></Image>
                <Text style={tw` mt-7 text-center font-extrabold text-amber-700 `}>"In the Aeroplane Over the Sea"</Text>
                <Text style={tw`text-center mt-2 italic text-gray-600 text-justify px-4`}> This album radiates a surreal, almost whimsical aura. Its lo-fi, raw production captures a sense of longing and beauty, like a forgotten folk tale told through the lens of surrealism. The blending of folk, indie rock, and poignant lyrics creates an atmosphere of haunting nostalgia. The album art—an old, faded drawing—perfectly complements the music's sense of being both timeless and otherworldly. "In the Aeroplane Over the Sea" is a wild, emotionally charged ride through fleeting memories and strange, beautiful moments. </Text>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
};