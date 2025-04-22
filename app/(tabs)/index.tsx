import { View, Text, Button } from "react-native";
import React from "react";
import className from "twrnc";
import HeroSection from "@/components/HeroSection";
import CustomDropdown from "@/components/CustomDropdown";
import DropDownSection from "@/components/DropDownSection";
import ProductSection from "@/components/ProductSection ";

const Home = () => {

  return (
    <View style={className`flex-1 items-center justify-center mt-10`}>
      <HeroSection />
      <DropDownSection/>

     <ProductSection/>

      <View style={className`bg-orange-500 w-full h-1/6`}>
        <Text style={className`text-white text-2xl`}>Products</Text>
      </View>
    </View>
  );
};

export default Home;
