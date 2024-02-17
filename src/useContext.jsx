
import React, { createContext, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const setUserData = (data) => {}; // Defina uma função vazia por padrão

  return (
    <UserContext.Provider value={{ setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
