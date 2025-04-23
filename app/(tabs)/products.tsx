import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import SearchBar from "@/components/SearchBar";
import CatagorySection from "@/components/CatagorySection";
import ProductViewSection from "@/components/ProductViewSection";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
const Products = () => {
  const navigation = useNavigation();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedProduct, setSelectedProduct] = useState(false);

  const handleGoBack = () => {
    setSelectedCategoryId(null);
    setSelectedProduct(false);
    navigation.goBack();
  };
  return (
    <View style={className`items-center justify-center mt-10`}>
      <View
        style={className`h-20 w-full flex flex-row items-center justify-between px-4 bg-white`}
      >
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={className`font-bold text-black text-lg`}>Produse</Text>
        <SearchBar />
      </View>

      {/* Ctagory section */}
      {!selectedProduct && (
        <CatagorySection
          setSelectedCategoryId={setSelectedCategoryId}
          selectedCategoryId={selectedCategoryId}
        />
      )}
      {/* Product section */}
      {!selectedProduct && selectedCategoryId && (
        <ProductViewSection setSelectedProduct={setSelectedProduct} />
      )}

      {selectedProduct && (
        <View style={className`bg-green-300 h-auto w-full`}>
          <Text>abeel</Text>
        </View>
      )}
    </View>
  );
};

export default Products;
