import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "twrnc"


export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={tw`p-10 items-center`}>
        <Image source={require('../../assets/images/baeksongmir.jpg')} style={tw`h-50 w-50 rounded-full border border-red-950`}></Image>
        <Text style={tw`text-center font-extrabold text-2xl mt-2`}>Baek Song Min</Text>
        <Text style={tw`mt-1 font-semibold text-gray-600 mb-3`}> Wanita Karir | Model <AntDesign name='checkcircleo' color='blue'></AntDesign></Text>

        <View style={tw`flex-row gap-5 mt-2`}>
        <FontAwesome style={tw`bg-gray-300 rounded-full p-2 px-3 text-blue-600`} name="facebook" size={24}/> 
        <FontAwesome style={tw`bg-gray-300 rounded-full p-2 px-3 text-blue-400`} name="twitter" size={24}/> 
        <Entypo style={tw`bg-gray-300 rounded-full p-2 px-3 text-red-600`} name="youtube" size={24}/> 
        <FontAwesome style={tw`bg-gray-300 rounded-full p-2 px-3 text-rose-600`} name="instagram" size={24}/> 
        </View>
      </View>
      
      <View style={tw`flex-row w-full justify-around `}>
          <View>
            <Text style={tw`font-extrabold text-lg`}>11</Text>
            <Text style={tw`font-extrabold text-lg`}>Posts</Text>
          </View>
          <View>
            <Text style={tw`font-extrabold text-lg`}>11.6K</Text>
            <Text style={tw`font-extrabold text-lg`}>Followers</Text>
          </View>
          <View>
            <Text style={tw`font-extrabold text-lg`}>100</Text>
            <Text style={tw`font-extrabold text-lg`}>Following</Text>
          </View>
        </View>

        <View style={tw`flex-row justify-center gap-4 px-5 mt-5`}>
          <Link href="/pesat/project" style={tw`bg-amber-700 py-3 w-1/2 rounded`}>
            <Text style={tw`text-black-200 bg-amber-700  py-3 text-center text-lg font-medium rounded w-1/2`}>Project</Text></Link>
            <Link href="/pesat/siswa" style={tw`bg-black py-3 w-1/2 rounded`}>
            <Text style={tw`text-amber-700 bg-black py-3 text-center text-lg font-medium rounded w-1/2`}>My Modelling</Text></Link>
          </View>

          <View style={tw`flex-row flex-wrap gap-y-5 w-full justify-between mt-3`}>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmik.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmip.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmih.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmig.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmim.jpg')} style={tw`w-full h-30`}/>
            </View>
            <View style={tw`basis-[30%]`}>
              <Image source={require('../../assets/images/baeksongmin.jpg')} style={tw`w-full h-30`}/>
            </View>
          </View>

</ScrollView>
</SafeAreaView> 
);
}




