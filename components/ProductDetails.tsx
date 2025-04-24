import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import className from "twrnc";
import { dummyProducts } from "@/assets/dummyProducts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const ProductDetails = ({
  toggleDropdown,
  isGridViewEnabled,
}: {
  isGridViewEnabled: boolean;
  toggleDropdown: any;
}) => {
  return (
    <View style={[className`flex-row flex-wrap justify-between`, { gap: 8 }]}>
      {dummyProducts.map((product) => (
        <View
          key={product.id}
          style={[
            className`bg-white rounded-lg overflow-hidden mb-4`,
            { width: isGridViewEnabled ? "48%" : "100%" }, // responsive width
          ]}
        >
          <Image
            source={{ uri: product.image }}
            resizeMode="cover"
            style={className`${isGridViewEnabled ? "h-40" : "h-64"} w-full`}
          />
          <Text style={className`text-black text-base px-2`}>
            {product.description}
          </Text>
          <Text style={className`text-gray-500 text-lg px-2 line-through`}>
            $5000
          </Text>
          <View style={className`flex-row items-center justify-between px-2`}>
            <Text style={className`text-black text-xl font-bold`}>
              {product.price}
            </Text>
            <TouchableOpacity
              onPress={toggleDropdown}
              style={className`bg-red-500 rounded-full items-center justify-center h-14 w-14`}
            >
              <MaterialIcons
                name="shopping-cart-checkout"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProductDetails;
