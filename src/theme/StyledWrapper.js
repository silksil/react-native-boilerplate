import { mapping } from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";
import { brandColors, darkColors, lightColors } from "./theme/colors";
import { ThemeProvider } from "./ThemeProvider";
import { Box } from "@components/Box";

const Layout = styled(Box)`
  flex: 1;
`;

const StyledWrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const blurTint = isDark ? "dark" : "light";

  const colorTheme = isDark
    ? { ...darkColors, ...brandColors }
    : { ...lightColors, ...brandColors };

  return (
    <ApplicationProvider mapping={mapping} theme={colorTheme}>
      {Platform.OS === "ios" && <StatusBar style={isDark ? "light" : "dark"} />}
      <IconRegistry icons={EvaIconsPack} />
      <ThemeProvider setIsDark={setIsDark} isDark={isDark} blurTint={blurTint}>
        <Layout bg="background-basic-color-1">
          <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
        </Layout>
      </ThemeProvider>
    </ApplicationProvider>
  );
};

export { StyledWrapper };
