import { Box } from "../Box";
import { Icon } from "../Icon";
import { Text } from "../Text";
import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableWithoutFeedback``;

const Tab = ({ label, accessibilityStates, onPress, iconName, index }) => {
  const isFocused = accessibilityStates[0] === "selected";
  const color = isFocused ? "text-basic-color" : "text-hint-color";

  return (
    <Container onPress={onPress} index={index}>
      <Box
        flex={1}
        flexDirection="center"
        alignItems="center"
        justifyContent="center"
        backgroundColor="background-basic-color-1"
      >
        {iconName && <Icon color={color} size="m" name={iconName} />}
        {label && (
          <Text category="c1" color={color}>
            {label}
          </Text>
        )}
      </Box>
    </Container>
  );
};

export { Tab };
