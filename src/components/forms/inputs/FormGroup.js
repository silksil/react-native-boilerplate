import { node } from "prop-types";
import React from "react";
import styled from "styled-components/native";

const StyledFormGroup = styled.View`
  width: 100%;
  height: 40px;
  margin-bottom: 16px;
`;

const FormGroup = ({ children }) => (
  <StyledFormGroup>{children}</StyledFormGroup>
);

FormGroup.propTypes = {
  children: node,
};

FormGroup.defaultProps = {
  children: null,
};

export default FormGroup;
