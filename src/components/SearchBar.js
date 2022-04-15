import React, { useState, useEffect } from "react";
import { Input as BaseInput } from "@ui-kitten/components";
import { Icon } from "./Icon";
import { useTheme } from "styled-components/native";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import { border, flex, layout, space } from "styled-system";

const SearchIcon = () => (
  <Icon name="search" size="s" color="icon-hint-color" />
);

export const StyledInput = styled(BaseInput)`
  background-color: ${({ theme }) => theme.colors["background-basic-color-2"]};
  border-color: transparent;
  ${space}
  ${layout}
  ${flex}
  ${border}
`;

const SearchBar = ({ callback, ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { isDark } = useTheme();

  const CancelIcon = () => (
    <Icon
      color="icon-hint-color"
      name="close-circle-outline"
      onPress={() => {
        setValue("");
        Keyboard.dismiss();
      }}
    />
  );

  useEffect(() => {
    if (!callback) return;
    callback(value);
  }, [callback, value]);

  return (
    <StyledInput
      accessoryLeft={SearchIcon}
      borderRadius="s"
      keyboardAppearance={isDark ? "dark" : "light"}
      autoCorrect={false}
      accessoryRight={isFocused && CancelIcon}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={setValue}
      callback={callback}
      value={value || ""}
      {...props}
    />
  );
};

export { SearchBar };
