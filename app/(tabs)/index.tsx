import { View } from "react-native";
import React from "react";
import className from "twrnc";
import HeroSection from "@/components/HeroSection";
import DropDownSection from "@/components/DropDownSection";
import ProductSection from "@/components/ProductSection ";
import BottomSection from "@/components/BottomSection";

const Home = () => {
  return (
    <View style={className` items-center justify-center `}>
      <HeroSection />
      <DropDownSection />
      {/* <ProductSection />
      <BottomSection /> */}
    </View>
  );
};

export default Home;
