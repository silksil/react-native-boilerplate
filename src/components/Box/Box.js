import { node, shape } from "prop-types";
import React from "react";

import * as S from "./styled";

const Box = ({ children, backgroundColor, boxShadow, ...props }) => {
  /**
   * React native shadows are not supported by styled-system, and we want to
   * decide the size of the shadow per mode (dark or light),  so it is done manually.
   * Likewise, for the backgroundColor we want to decide the color per mode (dark or light)
   */
  return (
    <S.View backgroundColor={backgroundColor} boxShadow={boxShadow} {...props}>
      {children}
    </S.View>
  );
};

Box.propTypes = {
  styling: shape(),
  children: node,
};

Box.defaultProps = {
  styling: {},
  children: null,
};

export { Box };
