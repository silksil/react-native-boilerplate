import React from "react";

import {
  AppleAuthenticationButton,
  AppleAuthenticationButtonStyle,
  AppleAuthenticationButtonType,
} from "expo-apple-authentication";

import { useTheme } from "styled-components";
import { isAvailableAsync } from "expo-apple-authentication";

const AppleButton = () => {
  const { radii, button } = useTheme();
  const deviceSupportsAppleAuthentication = isAvailableAsync();

  if (!deviceSupportsAppleAuthentication) return null;

  return (
    <AppleAuthenticationButton
      buttonType={AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthenticationButtonStyle.BLACK}
      // onPress={login}
      cornerRadius={radii.m}
      //eslint-disable-next-line
      style={{ width: "100%", height: button.l.height }}
    />
  );
};

export { AppleButton };
