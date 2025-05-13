import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../slice/formSlice";
const FormScreen = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();
  const { loading, response, error } = useSelector((state) => state.form);

  const handleSubmit = () => {
    if (!name || !job) return;
    dispatch(submitForm({ name, job }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Job"
        value={job}
        onChangeText={setJob}
      />
      <Button title="Submit" onPress={handleSubmit} />

      {loading && <ActivityIndicator size="large" style={styles.loading} />}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      {response && (
        <View style={styles.response}>
          <Text style={styles.label}>Response:</Text>
          <Text>ID: {response.id}</Text>
          <Text>Created At: {response.createdAt}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  loading: { marginTop: 20 },
  error: { color: "red", marginTop: 10 },
  response: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 6,
  },
  label: { fontWeight: "bold" },
});

export default FormScreen;
