import React from "react";
import { Box } from "@components/Box";
import { Text } from "@components/Text";

import appInfo from "../../app.json";
import { PasswordInput, TextInput } from "@components/forms";

function Login() {
  return (
    <Box backgroundColor="background-basic-color-1" flex={1} py="40%" px="l">
      <Text numberOfLines={1} category="h4">
        Welcome to {appInfo.expo.name}👋
      </Text>
      <Text category="h5" mt="m" mb="xl" fontWeight="normal">
        {appInfo.expo.name} helps you to keep an eye on your spine.
      </Text>
      <TextInput />
      <PasswordInput />
    </Box>
  );
}
export { Login };
