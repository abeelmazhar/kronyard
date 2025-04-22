import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import HeroSection from "@/components/HeroSection";
import CustomDropdown from "@/components/CustomDropdown";

const Home = () => {
  const dropdownData1 = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const dropdownData2 = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ];

  const dropdownData3 = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <View style={className`flex-1 items-center justify-center mt-10`}>
      <HeroSection />

      <View
        style={className`gap-3 flex items-center justify-center w-full h-1/3 z-30 `}
      >
        <CustomDropdown
          items={dropdownData1}
          placeholder="Select category"
          onChangeValue={(val) => console.log("Dropdown 1 value:", val)}
        />
        <CustomDropdown
          items={dropdownData2}
          placeholder="Select fruit"
          onChangeValue={(val) => console.log("Dropdown 2 value:", val)}
        />
        <CustomDropdown
          items={dropdownData3}
          placeholder="Select color"
          onChangeValue={(val) => console.log("Dropdown 3 value:", val)}
        />
      </View>

      <View style={className`bg-yellow-500 w-full h-1/6`}>
        <Text style={className`text-white text-2xl`}>Products</Text>
      </View>

      <View style={className`bg-orange-500 w-full h-1/6`}>
        <Text style={className`text-white text-2xl`}>Products</Text>
      </View>
    </View>
  );
};

export default Home;
