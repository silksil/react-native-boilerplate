import {
  KeyboardAvoidingView as BaseKeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/stack";

import React from "react";

const KeyboardAvoidingView = ({ children }) => {
  const headerHeight = useHeaderHeight();

  return (
    <BaseKeyboardAvoidingView
      keyboardVerticalOffset={
        Platform.OS === "ios"
          ? Constants.statusBarHeight
          : headerHeight + Constants.statusBarHeight
      }
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {children}
    </BaseKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
export { KeyboardAvoidingView };
