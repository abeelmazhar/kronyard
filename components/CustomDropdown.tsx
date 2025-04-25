// components/CustomDropdown.tsx
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import className from "twrnc";

const CustomDropdown = ({
  items,
  placeholder,
  onChangeValue,
  zIndex,
  zIndexInverse,
}: {
  items: { label: string; value: string }[];
  placeholder: string;
  onChangeValue: (value: string | null) => void;
  zIndex: number;
  zIndexInverse: number;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [dropdownItems, setDropdownItems] = useState(items);

  return (
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
      style={className`bg-white border border-gray-300`}
      dropDownContainerStyle={className`bg-white border border-gray-300`}
      placeholder={placeholder || "Select an option"}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
    />
  );
};

export default CustomDropdown;
