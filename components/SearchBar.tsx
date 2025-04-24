import { View, TextInput } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import className from "twrnc";
const SearchBar = ({
  selectedCategoryId,
}: {
  selectedCategoryId?: number | null;
}) => {
  return (
    <View
      style={className`flex-row items-center px-4 py-2 rounded-full  ${
        selectedCategoryId ? "w-16" : "w-2/3"
      } border border-gray-200 shadow-md h-15 bg-transparent gap-2`}
    >
      <AntDesign name="search1" size={24} color="gray" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="gray"
        style={className`flex-1 text-gray-200 `}
      />
    </View>
  );
};

export default SearchBar;
