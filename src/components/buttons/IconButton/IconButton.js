import React from "react";
import * as S from "./styled";

const IconButton = ({ children, backgroundColor, ...props }) => {
  const getColor = backgroundColor
    ? backgroundColor
    : "background-basic-color-1";
  return (
    <S.IconButton
      justifyContent="center"
      alignItems="center"
      backgroundColor={getColor}
      {...props}
    >
      {children}
    </S.IconButton>
  );
};
export { IconButton };
