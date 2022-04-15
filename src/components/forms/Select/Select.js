import React from "react";
import * as S from "./styled";

const Select = ({ children, ...props }) => {
  return <S.Select {...props}>{children}</S.Select>;
};

export { Select };
