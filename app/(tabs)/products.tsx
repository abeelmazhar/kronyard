import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import className from 'twrnc'

const products = () => {
  return (
    <View style={className`flex-1 items-center justify-center mt-10`}>
  <View style={className`w-full h-1/3 bg-white`}>
     
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600' }}
          style={className`w-full h-full opacity-70` }
          resizeMode="cover"
        />
     
    </View>
    
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

export default products

