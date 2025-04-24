import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import className from "twrnc";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const FiltersModal = ({
  filterModalVisible,
  setFilterModalVisible,
}: {
  filterModalVisible: boolean;
  setFilterModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropdowns, setDropdowns] = useState({
    color: false,
    brand: false,
    rating: false,
  });

  const [selectedFilters, setSelectedFilters] = useState<{
    color: string[];
    brand: string[];
    rating: string[];
  }>({
    color: [],
    brand: [],
    rating: [],
  });

  const toggleDropdown = (key: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleCheckbox = (
    category: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const exists = prev[category].includes(value);
      return {
        ...prev,
        [category]: exists
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const FILTER_OPTIONS = {
    color: ["Red", "Blue", "Green", "Yellow", "Black"],
    brand: ["Nike", "Adidas", "Puma", "Reebok"],
    rating: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
  };

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
              style={className`left-4`}
            >
              <Text style={className`text-red-500 text-xl`}>X</Text>
            </TouchableOpacity>
            <Text style={className`text-xl font-bold mb-4`}>Filter</Text>
            <View />
          </View>

          <ScrollView contentContainerStyle={className`gap-4`}>
            {Object.keys(FILTER_OPTIONS).map((key) => {
              const category = key as keyof typeof FILTER_OPTIONS;

              return (
                <View key={category}>
                  <Pressable
                    onPress={() => toggleDropdown(category)}
                    style={className`p-4 border border-gray-200 rounded-lg flex-row justify-between items-center`}
                  >
                    <Text style={className`text-lg capitalize`}>
                      {category}
                    </Text>
                    <Text style={className`text-xl`}>
                      {dropdowns[category] ? (
                        <MaterialIcons
                          name="keyboard-arrow-up"
                          size={24}
                          color="black"
                        />
                      ) : (
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={24}
                          color="black"
                        />
                      )}
                    </Text>
                  </Pressable>
                  {dropdowns[category] &&
                    FILTER_OPTIONS[category].map((option) => {
                      const isChecked =
                        selectedFilters[category].includes(option);
                      return (
                        <TouchableOpacity
                          key={option}
                          onPress={() => toggleCheckbox(category, option)}
                          style={className`flex-row items-center px-4 py-2`}
                        >
                          <View
                            style={className`w-5 h-5 rounded border border-gray-400 items-center justify-center mr-2 ${
                              isChecked ? "bg-blue-500" : "bg-white"
                            }`}
                          >
                            {isChecked && (
                              <Text style={className`text-white text-xs`}>
                                ✓
                              </Text>
                            )}
                          </View>
                          <Text>{option}</Text>
                        </TouchableOpacity>
                      );
                    })}
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            onPress={() => {
              console.log("Selected Filters:", selectedFilters);
              setFilterModalVisible(false);
            }}
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
