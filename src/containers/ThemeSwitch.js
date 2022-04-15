import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";
import { Switch } from "react-native";
import { useTheme } from "styled-components/native";

const ThemeSwitch = () => {
  const { setIsDark, isDark } = useTheme();

  return (
    <Box
      px="m"
      py="s"
      backgroundColor="background-basic-color-2"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text> Night mode </Text>
      <Switch
        onValueChange={() => {
          setIsDark(!isDark);
        }}
        value={isDark}
      />
    </Box>
  );
};

export { ThemeSwitch };
