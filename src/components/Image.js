import React from "react";
import { Box } from "@components/Box";

import styled from "styled-components/native";
import { border } from "styled-system";

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  ${border}
`;

const Image = ({
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  ...props
}) => {
  /**
   * A box around the image is needed to facilitate the box shadow.
   */
  return (
    <Box {...props}>
      <StyledImage
        {...props}
        borderRadius={borderRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
      />
    </Box>
  );
};

export { Image };
