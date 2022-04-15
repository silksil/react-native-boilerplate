import { useTheme } from "@ui-kitten/components";
import { node } from "prop-types";
import React from "react";
import { ThemeProvider as BaseThemeProvider } from "styled-components/native";

import { styledSystem } from "./theme/styledSystem";

const ThemeProvider = ({ children, ...props }) => {
  /**
   * We retrieve the colors through the useTheme hook of ui-kitten
   * as this takes care of the mapping of brandColors and light/dark theme colors.
   */
  const colorTheme = useTheme();
  const theme = { colors: colorTheme, ...props, ...styledSystem };

  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export { ThemeProvider };
