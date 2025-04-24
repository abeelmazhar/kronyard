// components/CustomDropdown.tsx
import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import className from "twrnc";

const CustomDropdown = ({
  items,
  placeholder,
  onChangeValue,
}: {
  items: { label: string; value: string }[];
  placeholder: string;
  onChangeValue: (value: string | null) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [dropdownItems, setDropdownItems] = useState(items);

  return (
    <View style={{ zIndex: 100 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={(val) => {
          setValue(val);
          onChangeValue?.(val);
        }}
        setItems={setDropdownItems}
        style={className`  bg-white border border-gray-300  `}
        dropDownContainerStyle={className`bg-white border border-gray-300  `}
        placeholder={placeholder || "Select an option"}
      />
    </View>
  );
};

export default CustomDropdown;
