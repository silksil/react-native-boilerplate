import React from "react";
import { Spinner } from "@ui-kitten/components";
import { Box } from "@components/Box";
import { Text } from "@components/Text";

const Loading = props => {
  return (
    <Box alignItems="center" {...props}>
      <Text category="h6" appearance="hint" mb="s">
        Loading
      </Text>
      <Spinner size="giant" />
    </Box>
  );
};

export { Loading };
