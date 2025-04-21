import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import className from 'twrnc'
import HeroSection from '@/components/HeroSection'

const Home = () => {
  return (
    <View style={className`flex-1 items-center justify-center mt-10`}>
    <HeroSection />
       
        <View style={className`bg-green-500  w-full h-1/3`}>
   <Text style={className`text-white text-2xl`}>Products</Text>
       </View>
   
       <View style={className`bg-yellow-500  w-full h-1/6`}>
       <Text style={className`text-white text-2xl`}>Products</Text>
       </View>
   
       <View style={className`bg-orange-500  w-full h-1/6`}>
       <Text style={className`text-white text-2xl`}>Products</Text>
           </View>   
       
       </View>
  )
}

export default Home