import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    ImageBackground,
    ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Project() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={tw`p-4`}>
                    <View style={tw`flex-row justify-between`}>
                        <Text style={tw`mb-5 font-extrabold text-amber-700`}>
                            Baek Song Min
                        </Text>
                        <View style={tw`flex-row gap-4 `}>
                           <Text style={tw`text-amber-700`}> <Ionicons name="chatbubble-ellipses-outline" size={24}></Ionicons>
                            <Entypo name="phone" size={24}></Entypo> </Text>
                        </View>
                    </View>
                    <Image
                        source={require("../../assets/images/21.jpg")}
                        style={tw`w-full h-70  shadow-2xl shadow-orange-800 rounded-3xl`}
                    ></Image>


                    <View style={tw`justify-center items-center`}>
                        <Text
                            style={tw`text-amber-700 bg-black w-25 p-2 text-center text-lg font-medium rounded-3xl bottom-5 `}
                        >
                            Hire Me
                        </Text>
                    </View>

                    <View
                        style={tw`flex-row w-full justify-around bg-neutral-300 p-6 rounded-3xl bottom-4 `}
                    >
                        <View>
                            <Text style={tw`font-extrabold text-lg`}>11</Text>
                            <Text style={tw`font-extrabold text-lg`}>Kelas</Text>
                        </View>
                        <View>
                            <Text style={tw`font-extrabold text-lg`}>RPL</Text>
                            <Text style={tw`font-extrabold text-lg`}>Jurusan</Text>
                        </View>
                        <View>
                            <Text style={tw`font-extrabold text-lg`}>100.8K</Text>
                            <Text style={tw`font-extrabold text-lg`}>Followers</Text>
                        </View>
                    </View>

                    <View style={tw`justify-center items-center`}>
                        <Text
                            style={tw`text-amber-700 bg-black w-25 p-2 text-center text-lg font-medium rounded-3xl bottom-7 `}
                        >
                            Hire Me
                        </Text>
                    </View>

                    <View
                        style={tw`flex-row w-full justify-around bg-neutral-300 p-6 rounded-3xl bottom-7 `}
                    >
                        <Text style={tw`text-justify italic text-gray-700`}>
                            I am a wanderer of thoughts and dreams, a quiet soul wrapped in a
                            world of wonder. My presence is like a gentle breeze, felt but not
                            always seen, leaving traces of warmth and intrigue wherever I go. I
                            carry the kind of quiet depth that invites curiosity, like a book
                            with pages waiting to be turned, each chapter revealing layers of
                            untold stories and hidden sparks. With an eye for beauty in the
                            ordinary, I find art in the silence between words and poetry in the
                            stillness of moments. My heart beats to a rhythm of reflection, and
                            I live in the spaces where light and shadow dance together. I
                            believe in the power of subtle elegance—grace in simplicity,
                            strength in vulnerability. I am both the dreamer and the dream, the
                            calm and the storm, the artist and the canvas. I embrace the duality
                            of existence, finding balance between the daydreams of tomorrow and
                            the roots of today. My soul is a canvas painted with a palette of
                            experiences, each hue adding depth to my being, each stroke telling
                            a story of transformation and growth. To know me is to wander with
                            me into unexplored corners of the heart and mind, discovering not
                            only who I am, but the infinite possibilities of who I can become.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
