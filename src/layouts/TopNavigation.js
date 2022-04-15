import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";

const TopNavigation = ({
  title,
  subtitle,
  accessoryLeft,
  accessoryRight,
  mx = "m",
  my = "s",
  ...props
}) => (
  <Box mx={mx} my={my} {...props} alignItems="center" justifyContent="center">
    {/* z-index is needed to assure that the accessoryLeft is clickable */}
    {accessoryLeft && (
      <Box position="absolute" left={0} zIndex={1}>
        {accessoryLeft}
      </Box>
    )}
    {title && (
      <Text numberOfLines={1} category="h5">
        {title}
      </Text>
    )}
    {subtitle && (
      <Text
        numberOfLines={1}
        textAlign="center"
        category="h6"
        borderColor="red"
        fontWeight="normal"
      >
        {subtitle}
      </Text>
    )}
    {accessoryRight && (
      <Box position="absolute" right={0}>
        {accessoryRight}
      </Box>
    )}
  </Box>
);

export { TopNavigation };
