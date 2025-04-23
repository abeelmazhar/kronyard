import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import SearchBar from "@/components/SearchBar";

const dummyProducts = [
  {
    id: 1,
    name: "Motor",
    image: "https://images.unsplash.com/photo-1703181230250-c25802f3449b?w=500",
  },
  {
    id: 2,
    name: "Watch",
    image:
      "https://plus.unsplash.com/premium_photo-1687462867261-767d0dc52d34?w=500",
  },
  {
    id: 3,
    name: "Bag",
    image:
      "https://plus.unsplash.com/premium_photo-1674043992384-634c3efdbbe0?w=500",
  },
  {
    id: 4,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=500",
  },
  {
    id: 5,
    name: "Sunglasses",
    image:
      "https://plus.unsplash.com/premium_photo-1694016219798-9e08a6e9509c?w=500",
  },
  {
    id: 6,
    name: "Camera",
    image:
      "https://media.istockphoto.com/id/1303278496/photo/water-pumps.webp?a=1&b=1&s=612x612&w=0&k=20&c=ekbwU5BV6izo08EVHCtCiM7DkmPusxAWUjiNVGmCUvQ=",
  },
  {
    id: 7,
    name: "T-shirt",
    image: "https://images.unsplash.com/photo-1713983126180-68e2d1699af1?w=500",
  },
  {
    id: 8,
    name: "Cap",
    image: "https://images.unsplash.com/photo-1640556795357-71d4078d6228?w=500",
  },
  {
    id: 9,
    name: "Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
  },
  {
    id: 10,
    name: "Bottle",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  },
];

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={className`items-center justify-center mt-10 bg-gray-200`}>
      <View
        style={className`h-20 w-full flex flex-row items-center justify-between px-4 bg-white`}
      >
        <Text style={className`font-bold text-black text-lg`}>Produse</Text>
        <SearchBar />
      </View>

      {!isOpen && (
        <ScrollView style={className`bg-white w-full h-full mt-2`}>
          <View style={className`flex-row flex-wrap justify-start  gap-4 p-2`}>
            {dummyProducts.map((item) => (
              <View
                key={item.id}
                style={className`flex items-center justify-center gap-2`}
              >
                <Image
                  source={{ uri: item.image }}
                  style={className`w-22 h-22 rounded-full`}
                  resizeMode="cover"
                />
                <Text style={className`mt-2`}>{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default Products;
