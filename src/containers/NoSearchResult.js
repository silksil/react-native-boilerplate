import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";

const NoSearchResult = ({ searchValue }) => {
  return (
    <Box alignItems="center" mt="xl" mx="m" height="100%">
      <Text>Couldn't find </Text>
      <Text numberOfLines={1} fontWeight="bold">
        "{searchValue}"
      </Text>
      <Text mt="s">Try searching again using a</Text>
      <Text> different spelling or keyword.</Text>
    </Box>
  );
};

export { NoSearchResult };
