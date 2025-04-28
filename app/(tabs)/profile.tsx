import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import className from "twrnc";

const Profile = () => {
  const [rating, setRating] = useState(0);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (!username || !email || !description || rating === 0) {
      alert("Please fill all fields and select a rating.");
      return;
    }

    console.log({ rating, username, email, description });

    alert("Review Submitted Successfully!");
    router.back();
  };

  return (
    <View style={className`flex-1 p-4 bg-white pt-14`}>
      {/* Star Rating */}
      <Text style={className`text-lg font-bold mb-2`}>Rate the Product</Text>
      <View style={className`flex-row mb-4`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable key={star} onPress={() => setRating(star)}>
            <FontAwesome
              name={star <= rating ? "star" : "star-o"}
              size={32}
              color="#FFD700"
              style={className`mr-2`}
            />
          </Pressable>
        ))}
      </View>

      {/* Username Input */}
      <Text style={className`text-lg font-bold mb-2`}>Username</Text>
      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        style={className`border border-gray-300 rounded p-2 mb-4`}
      />

      {/* Email Input */}
      <Text style={className`text-lg font-bold mb-2`}>Email</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={className`border border-gray-300 rounded p-2 mb-4`}
      />

      {/* Description Input */}
      <Text style={className`text-lg font-bold mb-2`}>Description</Text>
      <TextInput
        placeholder="Write your review..."
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={className`border border-gray-300 rounded p-2 mb-6 text-start h-42`}
      />

      {/* Submit Button */}
      <Pressable
        onPress={handleSubmit}
        style={className`bg-red-500 p-3 rounded items-center`}
      >
        <Text style={className`text-white font-bold`}>Submit Review</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text style={className`text-red-300 text-xl`}>Login</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
