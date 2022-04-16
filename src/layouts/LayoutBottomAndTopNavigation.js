import React from "react";

import { useTheme } from "styled-components";

import { Box } from "@components/Box";
import { TopNavigation } from "./TopNavigation";

function LayoutBottomAndTopNavigation({
  children,
  title,
  subtitle,
  accessoryLeft,
  accessoryRight,
  ...props
}) {
  const { bottomNavigationHeight } = useTheme();

  return (
    <Box
      flex={1}
      flexGrow={1}
      backgroundColor="background-basic-color-1"
      pb={bottomNavigationHeight}
      pt={8}
      {...props}
    >
      <TopNavigation
        title={title}
        subtitle={subtitle}
        accessoryLeft={accessoryLeft}
        accessoryRight={accessoryRight}
        mx="m"
        my="s"
      />
      {children}
    </Box>
  );
}

export { LayoutBottomAndTopNavigation };
