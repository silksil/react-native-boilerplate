import React from "react";
import { Box } from "@components/Box";
import { LoginForm } from "@containers/LoginForm";
import { WelcomeText } from "@containers/LoginWelcomeText";

function Login() {
  return (
    <Box backgroundColor="background-basic-color-1" flex={1} py="40%" px="l">
      <WelcomeText />
      <LoginForm />
    </Box>
  );
}
export { Login };
