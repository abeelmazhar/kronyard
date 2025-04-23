import { View, Text, ScrollView } from "react-native";
import React from "react";
import className from "twrnc";
import ProductCatagoriesCard from "./ProductCatagoriesCard";
import { dummyProducts } from "@/assets/dummyProducts";
const CatagorySection = ({
  setSelectedCategoryId,
  selectedCategoryId,
}: {
  setSelectedCategoryId: any;
  selectedCategoryId: any;
}) => {
  return (
    <ScrollView
      style={className`bg-white w-full ${
        selectedCategoryId ? "h-50" : "h-full"
      } mt-2`}
      horizontal={!!selectedCategoryId}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={className`${
        selectedCategoryId ? "items-center px-2" : ""
      }`}
    >
      <View
        style={
          selectedCategoryId
            ? className`flex-row gap-4`
            : className`flex-row flex-wrap justify-start gap-4 p-2`
        }
      >
        {dummyProducts.map((item: any) => (
          <ProductCatagoriesCard
            key={item.id}
            id={item.id}
            imageUrl={item.image}
            catagoryName={item.name}
            isSelected={selectedCategoryId === item.id}
            onSelect={() => setSelectedCategoryId(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CatagorySection;
