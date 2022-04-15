import { BlurView } from "@components/BlurView";
import { Box } from "@components/Box";
import { Icon } from "@components/Icon";
import React from "react";

const ArrowBackIcon = ({ onPress, blurTint }) => (
  <Box borderRadius="m" overflow="hidden">
    <BlurView
      intensity={70}
      position="absolute"
      height="100%"
      width="100%"
      tint={blurTint}
    />
    <Icon name="arrow-back-outline" size="m" onPress={() => onPress()} />
  </Box>
);

export { ArrowBackIcon };
