import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import className from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { dummyProducts } from "@/assets/dummyProducts";

const ProductDetailCard = () => {
  return (
    <ScrollView style={className`w-full px-2 mb-4`}>
      {dummyProducts.map((product) => (
        <View key={product.id} style={className`w-full h-auto gap-2 mb-8`}>
          <Image
            source={{ uri: product.image }}
            resizeMode="cover"
            style={className`w-full h-64 `}
          />
          <Text style={className`text-black text-base  px-2`}>
            {product.description}
          </Text>
          <Text style={className`text-gray-500 text-lg px-2 line-through`}>
            $ 5000
          </Text>
          <View style={className`flex-row items-center justify-between px-2`}>
            <Text style={className`text-black text-xl font-bold`}>
              {product.price}
            </Text>
            <View
              style={className`bg-red-500 rounded-full items-center justify-center h-14 w-14`}
            >
              <MaterialIcons
                name="shopping-cart-checkout"
                size={30}
                color="white"
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductDetailCard;
