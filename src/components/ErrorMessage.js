import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";

const ErrorMessage = ({ text, ...props }) => {
  return (
    <Box alignItems="center" {...props}>
      <Text category="h6" color="text-danger-color">
        Something went wrong.
        {text}
      </Text>
      <Text color="text-danger-color">Try again later.</Text>
    </Box>
  );
};

export { ErrorMessage };
