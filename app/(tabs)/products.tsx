import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import className from 'twrnc'
const products = () => {
  return (
    <View style={className`flex-1 items-center justify-center mt-10`}>
    <View style={[className`bg-blue-500 w-full h-1/3 `]}>
    <Text style={className`text-white text-2xl`}>
        
    </Text>
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

