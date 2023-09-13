/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = JSON.parse(localStorage.getItem("user-auth"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  const logout = () => {
    // Clear data from localStorage
    localStorage.removeItem("user-auth");
    setUserData(null);
  };

  const updateUserData = (newData) => {
    // Update userData state
    setUserData(newData);

    // Update userData in localStorage
    localStorage.setItem("user-auth", JSON.stringify(newData));
  };

  return (
    <UserContext.Provider value={{ userData, logout, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}
