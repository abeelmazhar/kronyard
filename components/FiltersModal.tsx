import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import className from "twrnc";
const FiltersModal = ({
  filterModalVisible,
  setFilterModalVisible,
}: {
  filterModalVisible: boolean;
  setFilterModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={filterModalVisible}
      onRequestClose={() => setFilterModalVisible(false)}
    >
      <View style={className`flex-1 bg-black/50 justify-center items-center`}>
        <View style={className`bg-white h-[90%] w-11/12 rounded-2xl p-4`}>
          <View style={className`flex-row items-center justify-between`}>
            <TouchableOpacity
              onPress={() => setFilterModalVisible(false)}
              style={className` left-4`}
            >
              <Text style={className`text-red-500 text-xl`}>X</Text>
            </TouchableOpacity>
            <Text style={className`text-xl font-bold mb-4`}>Filter</Text>
            <View></View>
          </View>
          <ScrollView contentContainerStyle={className`gap-4`}>
            {/* Dummy Filter Options (replace with real ones) */}
            {["Price Range", "Brand", "Rating", "Availability", "Color"].map(
              (item, index) => (
                <TouchableOpacity
                  key={index}
                  style={className`p-4 bg-gray-100 rounded-xl`}
                >
                  <Text style={className`text-lg`}>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>

          {/* Close Button */}
          <TouchableOpacity
            onPress={() => setFilterModalVisible(false)}
            style={className`mt-6 bg-red-500 py-3 rounded-xl`}
          >
            <Text
              style={className`text-white text-center text-lg font-semibold`}
            >
              Apply Filters
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;
