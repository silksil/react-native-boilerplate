import React from "react";
import { Text } from "@components/Text";
import { Box } from "@components/Box";

const Tag = ({
  status = "success",
  accessoryLeft,
  accessoryRight,
  children,
  ...props
}) => {
  const backgroundColor = {
    basic: "background-basic-color-2",
    success: "background-success-color-default",
  }[status];

  const textColor = {
    basic: "text-basic-color",
    success: "text-success-contrast-color",
  }[status];

  return (
    <Box
      p="xs"
      flexDirection="row"
      borderRadius="s"
      alignSelf="flex-start"
      alignItems="center"
      bg={backgroundColor}
      {...props}
    >
      {accessoryLeft && accessoryLeft}
      <Text fontcolor={textColor}>{children}</Text>
      {accessoryRight && accessoryRight}
    </Box>
  );
};

export { Tag };
