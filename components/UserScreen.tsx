import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../slice/userSlice";

const UserScreen = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);
  console.log("data", data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading)
    return (
      <ActivityIndicator size="large" style={styles.center} color="#0000ff" />
    );
  if (error) return <Text style={styles.center}>Error: {error}</Text>;

  return (
    <>
      {data.map((user) => (
        <View key={user.id} style={styles.card}>
          <Image
            source={{ uri: user.picture.thumbnail }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>
              {user.name.first} {user.name.last}
            </Text>
            <Text style={styles.details}>{user.email}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 16,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
});

export default UserScreen;
