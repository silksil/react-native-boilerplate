import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";

const DetailInfoItem = ({ title, author, description }) => {
  return (
    <>
      <Box py="s" px="xl" backgroundColor="background-basic-color-1">
        <Text textAlign="center" category="h6">
          {title}
        </Text>
      </Box>
      <Text textAlign="center" category="h6" fontWeight="lighter">
        {`by ${author}`}
      </Text>
      <Text mx="m" mt="m" fontWeight="bold">
        Description
      </Text>
      <Text mx="m">{description}</Text>
    </>
  );
};

export { DetailInfoItem };
