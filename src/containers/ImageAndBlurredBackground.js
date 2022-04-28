import { BlurView } from "@components/BlurView";
import { Box } from "@components/Box";
import { Image } from "@components/Image";
import React from "react";
import { useTheme } from "styled-components/native";
import { useWindowDimensions } from "react-native";

const ImageAndBlurredBackground = ({ cover }) => {
  const { bookCoverHeightToWidthRatio, blurTint } = useTheme();
  const windowHeight = useWindowDimensions().height;
  const blurredBoxHeight = windowHeight * 0.5;
  const blurredImageHeight = windowHeight * 0.45;
  const coverHeight = windowHeight * 0.3;
  const coverWidth = coverHeight * bookCoverHeightToWidthRatio;

  return (
    <Box height={`${blurredBoxHeight}px`}>
      <Image
        width="100%"
        height={blurredImageHeight}
        source={{
          uri: cover,
        }}
      />
      <BlurView
        intensity={100}
        position="absolute"
        height="100%"
        width="100%"
        tint={blurTint}
      />
      <Box
        justifyContent="center"
        alignItems="center"
        position="absolute"
        width="100%"
        height="100%"
      >
        <Image
          borderRadius="s"
          width={coverWidth}
          height={coverHeight}
          source={{
            uri: cover,
          }}
        />
      </Box>
    </Box>
  );
};

export { ImageAndBlurredBackground };
