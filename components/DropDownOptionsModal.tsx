import { View, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import className from "twrnc";
const DropDownOptionsModal = ({
  dropdownVisible,
  setDropdownVisible,
  setIsDetailsModalOpen,
}: {
  dropdownVisible: boolean;
  setDropdownVisible: (visible: boolean) => void;
  setIsDetailsModalOpen: any;
}) => {
  return (
    <>
      <Modal
        transparent
        visible={dropdownVisible}
        animationType="fade"
        onRequestClose={() => setDropdownVisible(false)}
      >
        <Pressable
          onPress={() => {
            setDropdownVisible(false);
            setIsDetailsModalOpen(true);
          }}
          style={className`flex-1 bg-black/50 justify-end items-center`}
        >
          <View style={className`bg-white w-11/12 rounded-xl p-4 mb-4`}>
            {["View Cart", "Buy Now", "Wishlist", "Share", "Save"].map(
              (option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setDropdownVisible(false);
                    setIsDetailsModalOpen(true);
                  }}
                  style={className`py-3 border-b border-gray-200`}
                >
                  <Text style={className`text-center text-lg text-black`}>
                    {option}
                  </Text>
                </TouchableOpacity>
              )
            )}
          </View>
          <TouchableOpacity
            onPress={() => {
              setDropdownVisible(false);
            }}
            style={className`py-3 border-b border-gray-200 bg-white mb-34 w-11/12 rounded-xl`}
          >
            <Text style={className`text-center text-lg text-black`}>
              Cancel
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Modal>
    </>
  );
};

export default DropDownOptionsModal;
