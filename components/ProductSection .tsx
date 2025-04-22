import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import className from 'twrnc';
import Ionicons from '@expo/vector-icons/Ionicons';
const ProductSection = () => {
  const products = [
    { id: 1, name: 'Civic', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Civic', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Civic', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Civic', image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D' },
  ];

  return (
    <View style={className`flex flex-row w-full h-1/6 p-4 gap-2`}>
      <View style={className`flex-col flex items-center justify-center gap-4`}>
        <View style={className`bg-red-500 flex items-center justify-center w-18 h-18 rounded-full`}>

      <Ionicons name="grid" size={40} color="white"  />
        </View>
        <Text style={className`text-black text-md font-semibold`}>Products</Text>
        </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item) => (
          <View key={item.id} style={className`items-center mr-4 flex-col`}>
            <Image
              source={{ uri: item.image }}
              style={className`w-20 h-20 rounded-lg`}
              resizeMode="cover"
            />
            <Text style={className`text-black text-sm`}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductSection;
