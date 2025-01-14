import { Image, StyleSheet, Platform, View , Text, ImageBackground, ScrollView} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"
import { Entypo, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <ImageBackground source={require('../../assets/images/baeksongmik.jpg')} style={tw`w-full h-220 item-center absolute `}/>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        
      </View>

      <View style={tw`bg-amber-700 p-10 mt-100  rounded-t-3xl `}>
        <View>
          <Text style={tw`font-extrabold text-3xl`}>Baek Song Min</Text>
          <View style={tw` flex-row gap-5 mt-3`}>
          <Text style={tw`font-extrabold `}>Strategist</Text>
          <Text style={tw`font-extrabold`}> <Entypo name='location-pin'/> Dubai</Text>
          </View>
        </View>

        <View style={tw`flex-row w-full justify-between mt-7`}>
          <View>
            <Text style={tw`font-extrabold text-lg`}>11</Text>
            <Text style={tw`font-extrabold text-lg`}>Kelas</Text>
          </View>
          <View>
            <Text style={tw`font-extrabold text-lg`}>RPL</Text>
            <Text style={tw`font-extrabold text-lg`}>Jurusan</Text>
          </View>
          <View>
            <Text style={tw`font-extrabold text-lg`}>542</Text>
            <Text style={tw`font-extrabold text-lg`}>Pengikut</Text>
          </View>
        </View>

        <View style={tw`mt-10`}>
            <Text style={tw`text-amber-700 bg-black w-25 p-2 text-center text-lg font-medium rounded-3xl`}>Hire Me</Text>
          </View>

          <View style={tw`mt-8 flex-row items-center w-100 gap-5`}>
            <View>
              <FontAwesome name="facebook" size={24}/>
            </View>
            
            <View>
              <FontAwesome name="linkedin" size={24}/>
            </View>

            <View>
              <FontAwesome name="twitter" size={24}/>
             </View>
          </View>

          <View style={tw`mt-7`}>
            <Text style={tw` font-extrabold text-lg`}>ABOUT</Text>
            <Text style={tw` text-justify`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a ipsa quaerat ea aperiam asperiores repellendus voluptatum. Cum, autem dolorem cupiditate quos, excepturi rerum repudiandae laboriosam a molestiae nulla pariatur!</Text>
          </View>

          <View style={tw`mt-7`}>
            <Text style={tw` font-extrabold text-lg`}>PROJECTS</Text>
            <Text style={tw` text-justify`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a ipsa quaerat ea aperiam asperiores repellendus voluptatum. Cum, autem dolorem cupiditate quos, excepturi rerum repudiandae laboriosam a molestiae nulla pariatur!</Text>
          </View>

          <Text style={tw`mt-7 font-extrabold text-lg`}>
              TOOLS
          </Text>
          <View style={tw`justify-between flex-row mx-1`}>
            <Text style={tw` font-extrabold mt-2 `}> Microsoft Excel </Text>
            <Text style={tw` font-extrabold mt-2 `}> Microsoft Word </Text>
          </View>


      </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({



});


