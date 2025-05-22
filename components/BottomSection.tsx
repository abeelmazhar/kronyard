import { View, Text } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import className from "twrnc";
const BottomSection = () => {
  return (
    <View
      style={className`bg-black/90 w-full h-1/6 flex items-center justify-around flex-row`}
    >
      <View style={className`flex items-center justify- flex-col `}>
        <Entypo name="box" size={54} color="red" />
        <Text style={className`text-white text-lg`}>LIVRARE</Text>
      </View>
      <View style={className`flex items-center justify-center flex-col `}>
        <FontAwesome6 name="tent-arrow-turn-left" size={54} color="red" />
        <Text style={className`text-white text-lg`}>RETURN</Text>
      </View>
      <View style={className`flex items-center justify-center flex-col `}>
        <MaterialCommunityIcons
          name="google-circles-communities"
          size={54}
          color="red"
        />
        <Text style={className`text-white text-lg`}>PIESE</Text>
      </View>
    </View>
  );
};

export default BottomSection;
