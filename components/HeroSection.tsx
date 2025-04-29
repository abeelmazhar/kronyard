import React, { useEffect, useState } from "react";
import { Image, Text, View, Dimensions } from "react-native";
import className from "twrnc";
import SearchBar from "./SearchBar";

const { height } = Dimensions.get("window");

const imageUrls = [
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={className`w-full`}>
      {/* Image Section (responsive height using screen height) */}
      <View style={[className`relative w-full`, { height: height * 0.35 }]}>
        <Image
          source={{ uri: imageUrls[index] }}
          style={className`w-full h-full opacity-70`}
          resizeMode="cover"
        />

        {/* Dot indicators */}
        <View
          style={className`absolute bottom-3 left-0 right-0 flex-row justify-center`}
        >
          {imageUrls.map((_, i) => (
            <View
              key={i}
              style={className`w-3 h-3 mx-1 rounded-full ${
                index === i ? "bg-red-500" : "bg-white"
              }`}
            />
          ))}
        </View>

        {/* Logo + SearchBar */}
        <View
          style={className`absolute top-12 left-0 right-0 px-4 flex-row items-center justify-between`}
        >
          {/* Logo */}
          <View style={className`flex-row items-center`}>
            <View
              style={className`h-10 w-10 bg-gray-100/50 rounded-full border-2 border-white`}
            />
            <View style={className`ml-2`}>
              <Text style={className`text-white text-base font-bold`}>
                Kronyard
              </Text>
              <Text style={className`text-white text-xs`}>Dezmembari</Text>
            </View>
          </View>

          {/* Search Bar */}
          <SearchBar />
        </View>
      </View>
    </View>
  );
};

export default HeroSection;
