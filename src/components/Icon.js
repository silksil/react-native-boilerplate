import { shape, string } from "prop-types";
import React from "react";
import { useTheme } from "styled-components/native";
import { Icon as BaseIcon } from "@ui-kitten/components";

import styled from "styled-components/native";
import { color as styledColor, flex, layout, space } from "styled-system";

const getSize = (size, theme) => {
  if (!size) return;
  return theme.iconSize[size];
};

export const StyledIcon = styled(BaseIcon)`
  z-index: 999;
  ${({ largeness, theme }) => getSize(largeness, theme)};
  ${space}
  ${layout}
  ${flex}
  ${styledColor}
`;

const Icon = ({ size, color, ...props }) => {
  const { colors } = useTheme();

  /**
   * We are using the property largeness instead of size,
   * because the latter leads to an error.
   * Likely to be a reserved keyword.
   */
  return (
    <StyledIcon largeness={size} {...props} fill={colors[color] || color} />
  );
};

Icon.propTypes = {
  color: string,
  styling: shape(),
  size: string,
};

Icon.defaultProps = {
  color: "icon-basic-color",
  styling: {},
  size: "m",
};

export { Icon };
