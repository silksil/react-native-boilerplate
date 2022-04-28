import React, { useState, useEffect, createContext } from "react";
import {
  getAuthentication,
  setAuthentication,
  removeAuthentication,
} from "@stores/AuthenticationStore";
import { Alert } from "react-native";
import {
  AppleAuthenticationScope,
  signInAsync,
} from "expo-apple-authentication";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [appleCredentials, setAppleCredentials] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isLoading = false;

  /**
   * On opening the app check whether the userToken exists in the storage.
   */
  useEffect(() => {
    const fetchAppleCredentials = async () => {
      const credentials = await getAuthentication("apple");
      setAppleCredentials(credentials);
    };

    fetchAppleCredentials();
  }, []);

  const login = async () => {
    const credentials = await signInAsync({
      requestedScopes: [
        AppleAuthenticationScope.FULL_NAME,
        AppleAuthenticationScope.EMAIL,
      ],
    })
      .then(async () => {
        console.log(credentials);
        await setAuthentication("apple", "dummyCredentials");
        console.l;
        setAppleCredentials(credentials);
        setIsLoggedIn(true);

        console.log(isLoggedIn);
      })
      .catch(async e => {
        console.log(e);
        if (e.code === "ERR_CANCELED") {
          Alert.alert(
            "Authentication",
            "You canceled the authentication process",
          );
        }
        Alert.alert("Authentication", e.code);
      });
  };

  const logout = () => {
    removeAuthentication("apple");
    setIsLoggedIn(false);
    setAppleCredentials(null);
  };

  const value = {
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
