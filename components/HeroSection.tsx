import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import className from 'twrnc'
const HeroSection = () => {
  return (
    <View style={className`w-full h-1/3 relative`}>
         <Image
           source={{ uri: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600' }}
           style={className`relative w-full h-full opacity-70`}
           resizeMode="cover"
         />
   
         {/* Overlay content */}
         <View style={className`absolute top-2 flex-row items-center justify-between px-4 gap-3`}>
           <View style={className`flex-col items-center justify-center `}>
           <Text style={className`text-white text-xl font-bold`}>Kronyard</Text>
           <Text style={className`text-white text-md `}>Dezmembari</Text>
           </View>
           <TextInput
             placeholder="Search"
             placeholderTextColor="white"
             style={className` px-4 py-2 rounded-full w-2/3 border border-white border-2 shadow-md h-15`}
           />
         </View>
       </View>
  )
}

export default HeroSection