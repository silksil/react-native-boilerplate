import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/native";

const StyledMessage = styled.View`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 1rem 0;
  background-color: #ffb400;
  height: auto;
  line-height: 16px;
  width: 100%;
  padding: 16px 16px;
  font-size: 14px;
`;

const ErrorMessage = ({ children }) => (
  <StyledMessage role="alert">{children}</StyledMessage>
);

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorMessage;
