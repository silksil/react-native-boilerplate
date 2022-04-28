import React from "react";
import { Box } from "@components/Box";
import { WelcomeText } from "@containers/LoginWelcomeText";
import { AppleButton } from "@containers/AppleButton";

function Login() {
  return (
    <Box backgroundColor="background-basic-color-1" flex={1} py="40%" px="l">
      <WelcomeText />
      <AppleButton />
    </Box>
  );
}
export { Login };
