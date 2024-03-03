"use client";
import { makeStore } from "../redux/store";
import { Provider } from "react-redux";

function ReduxProvider({ children }) {
  return <Provider store={makeStore}>{children}</Provider>;
}

export default ReduxProvider;
