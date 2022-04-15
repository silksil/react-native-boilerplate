import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

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

const AuthProvider = ({ children }) => {
  const [appleCredentials, setAppleCredentials] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loginMutation = () => {};
  const loading = false;

  useEffect(() => {
    const fetchAppleCredentials = async () => {
      const credentials = await getAuthentication("apple");
      setAppleCredentials(credentials);
    };

    fetchAppleCredentials();
  }, []);

  useEffect(() => {
    if (appleCredentials?.identityToken && !isLoggedIn) {
      loginMutation();
    }
  }, [appleCredentials, isLoggedIn, loginMutation]);

  const login = async () => {
    try {
      const credentials = await signInAsync({
        requestedScopes: [
          AppleAuthenticationScope.FULL_NAME,
          AppleAuthenticationScope.EMAIL,
        ],
      });

      await setAuthentication("apple", credentials);
      setAppleCredentials(credentials);
    } catch (e) {
      if (e.code === "ERR_CANCELED") {
        Alert.alert(
          "Authentication",
          "You canceled the authentication process",
        );
      } else {
        Alert.alert("Authentication", e.code);
      }
    }
  };

  const logout = () => {
    removeAuthentication("apple");
    setIsLoggedIn(false);
    setAppleCredentials(null);
  };

  const value = {
    isLoggedIn,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
