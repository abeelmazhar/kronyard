import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import className from "twrnc";

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleSliderChange = (values: number[]) => {
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  return (
    <View style={className`p-4`}>
      <Text style={className`text-lg font-semibold mb-2`}>Price Range</Text>

      {/* Min and Max Inputs */}
      <View style={className`flex-row justify-between mb-4`}>
        <TextInput
          value={minPrice.toString()}
          keyboardType="numeric"
          editable={false}
          style={className`border border-gray-300 p-2 w-[45%] rounded-md bg-gray-100 text-center`}
        />
        <Text style={className`items-center justify-center flex`}>_</Text>
        <TextInput
          value={maxPrice.toString()}
          keyboardType="numeric"
          editable={false}
          style={className`border border-gray-300 p-2 w-[45%] rounded-md bg-gray-100 text-center`}
        />
      </View>

      {/* Dual-thumb Slider */}
      <MultiSlider
        values={[minPrice, maxPrice]}
        sliderLength={350}
        onValuesChange={handleSliderChange}
        min={0}
        max={2000}
        step={10}
        selectedStyle={{ backgroundColor: "black", height: 10 }}
        unselectedStyle={{ backgroundColor: "#D1D5DB", height: 10 }}
        markerStyle={{
          backgroundColor: "black",
          height: 25,
          width: 25,
          borderRadius: 15,
          borderWidth: 2,
          borderColor: "#fff",
        }}
        containerStyle={{ alignSelf: "center", height: 50 }}
      />
    </View>
  );
};

export default PriceRangeFilter;
