import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import className from "twrnc";

const FiltersButton = ({
  setFilterModalVisible,
  setIsGridViewEnabled,
}: {
  setFilterModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGridViewEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showSortPopup, setShowSortPopup] = useState(false);

  const handleSort = () => {
    setShowSortPopup(true);
    setTimeout(() => {
      setShowSortPopup(false);
    }, 2000);
  };

  return (
    <>
      <View
        style={className`w-full h-16 bg-white shadow-md flex-row items-center justify-around px-3 gap-1 `}
      >
        <Pressable
          onPress={handleSort}
          style={className`flex-row items-center justify-center bg-gray-300 rounded-3xl px-4 py-2 w-1/3`}
        >
          <MaterialIcons name="sort" size={24} color="black" />
          <Text style={className`text-gray-500 text-base ml-2`}>Sort</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setIsGridViewEnabled(true);
          }}
          style={className`flex-row items-center justify-center bg-gray-300 rounded-3xl px-3 py-2 w-1/3`}
        >
          {/* <MaterialIcons name="sort" size={24} color="black" /> */}
          <Text style={className`text-gray-500 text-base ml-2`}>Grid View</Text>
        </Pressable>
        <Pressable
          onPress={() => setFilterModalVisible(true)}
          style={className`flex-row items-center bg-gray-300 rounded-3xl px-3 py-2 w-1/3 justify-center`}
        >
          <MaterialIcons name="filter-list" size={24} color="black" />
          <Text style={className`text-gray-500 text-base ml-2`}>Filter</Text>
        </Pressable>
      </View>

      {/* Sort Success Modal */}
      <Modal
        transparent
        animationType="fade"
        visible={showSortPopup}
        onRequestClose={() => setShowSortPopup(false)}
      >
        <View
          style={className`flex-1 items-center justify-center bg-black bg-opacity-40`}
        >
          <View
            style={className`bg-white px-6 py-4 rounded-xl shadow-md items-center`}
          >
            <Text style={className`text-black text-lg font-semibold`}>
              Sorted successfully!
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FiltersButton;
