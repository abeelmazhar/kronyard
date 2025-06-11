import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import className from "twrnc";
import SearchBar from "./SearchBar";

// const imageUrls = [
//   "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600",
//   "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600",
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
// ];
const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={className`w-full h-1/3 relative`}>
      {/* Auto swap image section */}

      <View style={className`relative w-full h-full`}>
        <Image
          source={{ uri: imageUrls[index] }}
          style={className`w-full h-full opacity-70`}
          resizeMode="cover"
        />
        <View
          style={className`absolute bottom-5 left-0 right-0 flex-row justify-center`}
        >
          {/* {imageUrls.map((_, i) => (
            <View
              key={i}
              style={className`w-3 h-3 mx-1 rounded-full ${
                index === i ? "bg-red-500" : "bg-white"
              }`}
            />
          ))} */}
        </View>
      </View>

      {/* Logo and Search bar Section */}
      <View
        style={className`absolute top-2 flex-row items-center justify-between px-2 gap-1 mt-10`}
      >
        <View style={className`flex-row items-center justify-center `}>
          <View
            style={className`h-12 w-12 bg-gray-100/50 rounded-full border border-2 border-white`}
          />
          <View style={className`flex-col items-center justify-center `}>
            <Text style={className`text-white text-lg font-bold`}>
              Kronyard
            </Text>
            <Text style={className`text-white text-sm `}>Dezmembari</Text>
          </View>
        </View>
        <SearchBar />
      </View>
    </View>
  );
};

export default HeroSection;
