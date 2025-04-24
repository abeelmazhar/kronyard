import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import DropDownOptionsModal from "./DropDownOptionsModal";
import FiltersSection from "./FiltersSection";
import ProductDetails from "./ProductDetails";

const ProductDetailCard = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isGridViewEnabled, setIsGridViewEnabled] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      {/* FILTERS SECTION */}
      <FiltersSection setIsGridViewEnabled={setIsGridViewEnabled} />

      {/* CONTENT VIEW */}
      <ScrollView style={className`w-full px-2 mb-4`}>
        <ProductDetails
          toggleDropdown={toggleDropdown}
          isGridViewEnabled={isGridViewEnabled}
        />
      </ScrollView>

      {/* Dropdown Menu Modal */}
      {dropdownVisible && (
        <DropDownOptionsModal
          dropdownVisible={dropdownVisible}
          setDropdownVisible={setDropdownVisible}
          setIsDetailsModalOpen={setIsDetailsModalOpen}
        />
      )}
      <Modal
        transparent
        visible={isDetailsModalOpen}
        animationType="fade"
        onRequestClose={() => setIsDetailsModalOpen(false)}
      >
        <View style={className`flex-1 bg-black/50 justify-end items-center`}>
          <View
            style={className`bg-white w-11/11.5 h-11/15 rounded-xl p-4 mb-4 gap-3`}
          >
            <View style={className`flex-row justify-between items-center `}>
              <Pressable onPress={() => setIsDetailsModalOpen(false)}>
                <Text>X</Text>
              </Pressable>
              <Text style={className`font-semibold`}>Product Details</Text>
              <View></View>
            </View>
            <View
              style={className`h-42 w-full items-start justify-center flex-row gap-2`}
            >
              <Image
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1694016219798-9e08a6e9509c?w=500",
                }}
                style={className`h-25 w-40`}
              />
              <View style={className`w-2/4`}>
                <Text style={className`font-semibold`}>
                  Spacious and stylish backpack perfect for travel or school.
                </Text>
                <View style={className`flex-row gap-3 mt-4`}>
                  <Pressable
                    style={className`bg-gray-200 w-6 h-6 items-center justify-center`}
                  >
                    <Text>-</Text>
                  </Pressable>
                  <Pressable
                    style={className`bg-gray-200 w-6 h-6 items-center justify-center`}
                  >
                    <Text>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <ScrollView style={className` px-2 mb-4`}>
              <ProductDetails
                toggleDropdown={toggleDropdown}
                isGridViewEnabled={isGridViewEnabled}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ProductDetailCard;
