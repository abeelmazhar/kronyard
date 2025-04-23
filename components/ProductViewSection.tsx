import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
import { dummyProducts } from "@/assets/dummyProducts";
const ProductViewSection = ({
  setSelectedProduct,
}: {
  setSelectedProduct: any;
}) => {
  return (
    <ScrollView style={className`h-3/4 w-full`}>
      <View style={className`flex-row flex-wrap justify-between px-2`}>
        {dummyProducts.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={className`w-1/3 p-2`}
            onPress={() => setSelectedProduct(true)}
          >
            <View
              style={className`flex items-center justify-center gap-2 bg-white rounded-lg p-2`}
            >
              <Image
                source={{ uri: item.image }}
                style={className`w-full h-24 rounded-lg`}
                resizeMode="cover"
              />
              <Text style={className`mt-1 text-center`}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductViewSection;
