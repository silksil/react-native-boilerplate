import styled from "styled-components/native";
import { border, color, flex, layout, position, space } from "styled-system";

/**
 * Allows the shadow to different per mode (dark and light)
 */
const getBoxShadow = (boxShadow, theme) => {
  if (!boxShadow) return;
  const { dark, light } = boxShadow;
  const { isDark } = theme;
  const errorText =
    "When passing a boxShadow define size per mode (dark or light), e.g: `{ dark: backgroundBasic.s, light: backgroundBasic.m }`. It is possible to apply boxShadow on only one mode by only including the key of that mode, e.g. { dark: backgroundBasic.s } ";

  if (isDark && dark) {
    const [backgroundColor, size] = dark.split(".");
    if (!backgroundColor || !size) return console.error(errorText);

    return theme.boxShadow.dark[backgroundColor][size];
  }

  if (!isDark && light) {
    const [backgroundColor, size] = light.split(".");
    if (!backgroundColor || !size) return console.error(errorText);
    return theme.boxShadow.light[backgroundColor][size];
  }
};

/**
 * Allows the colors to be different per mode (dark and light)
 */
const getBackgroundColor = (backgroundColor, theme) => {
  if (!backgroundColor) return;

  /**
   * It is possible that for the light and dark mode the same color is used.
   * If this is done, a string is passed and the color is returned for both modes.
   */
  if (
    typeof backgroundColor === "string" ||
    backgroundColor instanceof String
  ) {
    return {
      /**
       * Returns the color through the colorKey, or by directing returning the color code.
       */
      backgroundColor: theme.colors[backgroundColor] || backgroundColor,
    };
  }

  const { dark, light } = backgroundColor;
  const { isDark } = theme;

  if (isDark && dark) {
    return {
      backgroundColor: theme.colors[dark] || dark,
    };
  }

  if (!isDark && light) {
    return {
      backgroundColor: theme.colors[light] || light,
    };
  }
};

export const View = styled.View`
  ${({ boxShadow, theme }) => getBoxShadow(boxShadow, theme)};
  ${space}
  ${color}
  ${({ backgroundColor, theme }) => getBackgroundColor(backgroundColor, theme)};
  ${layout}
  ${border}
  ${flex}
  ${position}
`;
