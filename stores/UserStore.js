import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    count: 1,
    increment() {
      store.count++;
    },
    decrement() {
      store.count--;
    }
  }));

  return (
    <userContext.Provider value={store}>{children}</userContext.Provider>
  );
};
