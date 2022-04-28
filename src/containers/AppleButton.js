import React from "react";

import {
  AppleAuthenticationButton,
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
} from "expo-apple-authentication";

import { useTheme } from "styled-components";
import { isAvailableAsync } from "expo-apple-authentication";
import { useAuth } from "@hooks/useAuth";

const AppleButton = () => {
  const { login } = useAuth();
  const { radii, button } = useTheme();
  const deviceSupportsAppleAuthentication = isAvailableAsync();

  if (!deviceSupportsAppleAuthentication) return null;

  return (
    <AppleAuthenticationButton
      buttonType={AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthenticationButtonStyle.BLACK}
      onPress={login}
      cornerRadius={radii.m}
      style={{ width: "100%", height: button.l.height }}
    />
  );
};

export { AppleButton };
