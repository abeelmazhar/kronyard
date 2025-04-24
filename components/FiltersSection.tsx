import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import className from "twrnc";
import FiltersButton from "./FiltersButton";
import FiltersModal from "./FiltersModal";

const FiltersSection = ({
  setIsGridViewEnabled,
}: {
  setIsGridViewEnabled: any;
}) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <>
      {/* Main Filter Buttons */}
      <FiltersButton
        setFilterModalVisible={setFilterModalVisible}
        setIsGridViewEnabled={setIsGridViewEnabled}
      />

      {/* Filter Modal */}
      <FiltersModal
        filterModalVisible={filterModalVisible}
        setFilterModalVisible={setFilterModalVisible}
      />
    </>
  );
};

export default FiltersSection;
