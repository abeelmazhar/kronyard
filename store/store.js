import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slice/userSlice";
import formReducer from "../slice/formSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    form: formReducer,
  },
});

export default store;
