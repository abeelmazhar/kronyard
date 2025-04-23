import { View, Text, ScrollView, Image, TouchableOpacity, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { dummyProducts } from "@/assets/dummyProducts";
import DropDownOptionsModal from "./DropDownOptionsModal";

const ProductDetailCard = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
    <View style={className`w-full h-16 bg-white shadow-md flex-row items-center justify-between px-4`}>
    <Pressable  style={className`flex-row items-center justify-center bg-gray-300 rounded-3xl px-4 py-2 w-1/3 `}>
  <MaterialIcons name="sort" size={24} color="black" />
  <Text style={className`text-gray-500 text-base`}>Sort</Text>
</Pressable>
<Pressable  style={className`flex-row items-center bg-gray-300 rounded-3xl px-4 py-2 w-1/3 justify-center`}>
  <MaterialIcons name="filter-list" size={24} color="black" />
  <Text style={className`text-gray-500 text-base`}>Filter</Text>
</Pressable>
    </View>
      <ScrollView style={className`w-full px-2 mb-4`}>
        {dummyProducts.map((product) => (
          <View key={product.id} style={className`w-full h-auto gap-2 mb-8`}>
            <Image
              source={{ uri: product.image }}
              resizeMode="cover"
              style={className`w-full h-64`}
            />
            <Text style={className`text-black text-base px-2`}>
              {product.description}
            </Text>
            <Text style={className`text-gray-500 text-lg px-2 line-through`}>
              $ 5000
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
      </ScrollView>

      {/* Dropdown Menu Modal */}
      <DropDownOptionsModal dropdownVisible={dropdownVisible}  setDropdownVisible={setDropdownVisible}/>
    </>
  );
};

export default ProductDetailCard;
