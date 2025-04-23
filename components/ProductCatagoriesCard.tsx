import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import className from "twrnc";
const ProductCatagoriesCard = ({
  id,
  imageUrl,
  catagoryName,
  isSelected,
  onSelect,
}: {
  id: number;
  imageUrl: string;
  catagoryName: string;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  return (
    <TouchableOpacity
      key={id}
      style={className`flex items-center justify-center gap-2`}
      onPress={onSelect}
    >
      <Image
        source={{ uri: imageUrl }}
        style={className`w-22 h-22 rounded-full ${
          isSelected ? "border-4 border-blue-500" : ""
        }`}
        resizeMode="cover"
      />
      <Text
        style={className`mt-2 ${isSelected ? "font-bold" : "font-semibold"}`}
      >
        {catagoryName}
      </Text>
    </TouchableOpacity>
  );
};

export default ProductCatagoriesCard;
