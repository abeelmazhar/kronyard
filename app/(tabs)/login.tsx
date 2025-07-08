import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import { Provider } from "react-redux";
import store from "../../store/store";
import UserScreen from "@/components/UserScreen";
import FormScreen from "../../components/FormScreen";
const login = () => {
  return (
    <Provider store={store}>
      <UserScreen />
      <FormScreen />
    </Provider>
  );
};

export default login;
