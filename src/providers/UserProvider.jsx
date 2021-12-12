import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  return <UserContext.Provider>{}</UserContext.Provider>;
};
