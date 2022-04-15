import React from "react";
import * as S from "./styled";
import { Text } from "@components/Text";
import { useTheme } from "styled-components/native";

const colors = {
  filled: {
    basic: {
      backgroundColor: "background-basic-color-2",
      textColor: "text-basic-color",
      borderColor: undefined,
    },
    primary: {
      backgroundColor: "background-primary-color-default",
      textColor: "text-primary-contrast-color",
      borderColor: undefined,
    },
  },
  outline: {
    basic: {
      backgroundColor: "transparent",
      textColor: "text-primary-contrast-color",
      borderColor: "background-basic-color-2",
    },
  },
};

/**
 * Had add a layer to UI kitten
 * because UI kitten did not allow us to change the color of the text
 */
const Button = ({
  children,
  status = "primary",
  appearance = "filled",
  disabled,
  size,
  ...props
}) => {
  const { fontSizes } = useTheme();
  const backgroundColor = colors[appearance][status].backgroundColor;
  const textColor = colors[appearance][status].textColor;
  const borderColor = colors[appearance][status].borderColor;

  return (
    <S.Button
      disabled={disabled}
      borderColor={borderColor}
      borderRadius="m"
      status={status}
      backgroundColor={!disabled && backgroundColor}
      height="40px"
      padding="2px"
      {...props}
    >
      <Text
        fontWeight="bold"
        color={textColor}
        padding="0px"
        fontSize={fontSizes.xs}
      >
        {children}
      </Text>
    </S.Button>
  );
};
export { Button };
