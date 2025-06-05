import { View, Text } from "react-native";
import React from "react";
import CustomDropdown from "./CustomDropdown";
import className from "twrnc";
const DropDownSection = () => {
  // const dropdownData1 = [
  //   { label: "Option 1", value: "option1" },
  //   { label: "Option 2", value: "option2" },
  // ];

  // const dropdownData2 = [
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ];

  // const dropdownData3 = [
  //   { label: "Red", value: "red" },
  //   { label: "Blue", value: "blue" },
  // ];

  return (
    <View
      style={className` gap-3 flex items-center justify-center w-full h-1/3  mx-2 bg-black/90 px-2 `}
    >
      <CustomDropdown
        items={dropdownData1}
        placeholder="Select category"
        onChangeValue={(val) => console.log("Dropdown 1 value:", val)}
        zIndex={3000}
        zIndexInverse={1000}
      />
      <CustomDropdown
        items={dropdownData2}
        placeholder="Select fruit"
        onChangeValue={(val) => console.log("Dropdown 2 value:", val)}
        zIndex={2000}
        zIndexInverse={2000}
      />
      <CustomDropdown
        items={dropdownData3}
        placeholder="Select color"
        onChangeValue={(val) => console.log("Dropdown 3 value:", val)}
        zIndex={1000}
        zIndexInverse={3000}
      />

      <View
        style={className`bg-red-500 px-6 py-3  mt-4 w-full flex items-center justify-center `}
      >
        <Text style={className`text-white text-lg font-bold`}>Submit</Text>
      </View>
    </View>
  );
};

export default DropDownSection;
