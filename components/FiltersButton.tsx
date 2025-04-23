import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import className from 'twrnc'
const FiltersButton = ({
    setFilterModalVisible
}:{
    setFilterModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <View style={className`w-full h-16 bg-white shadow-md flex-row items-center justify-between px-4`}>
    <Pressable style={className`flex-row items-center justify-center bg-gray-300 rounded-3xl px-4 py-2 w-1/3`}>
      <MaterialIcons name="sort" size={24} color="black" />
      <Text style={className`text-gray-500 text-base ml-2`}>Sort</Text>
    </Pressable>
    <Pressable
      onPress={() => setFilterModalVisible(true)}
      style={className`flex-row items-center bg-gray-300 rounded-3xl px-4 py-2 w-1/3 justify-center`}
    >
      <MaterialIcons name="filter-list" size={24} color="black" />
      <Text style={className`text-gray-500 text-base ml-2`}>Filter</Text>
    </Pressable>
  </View>
  )
}

export default FiltersButton