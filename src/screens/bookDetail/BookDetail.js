import React from "react";

import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ArrowBackIcon } from "./ArrowBackIcon";
import { Box } from "@components/Box";
import { TopNavigation } from "@layouts/TopNavigation";
import { ImageAndBlurredBackground } from "./ImageAndBlurredBackground";
import { BookInfo } from "./BookInfo";

const BookDetail = () => {
  const {
    params: { book },
  } = useRoute();
  const { cover } = book;
  const { goBack } = useNavigation();

  /**
   * Styling variables
   */
  const { button, space, blurTint } = useTheme();
  const marginButtonBottom = space.m;
  const paddingBottom = button.m.height + marginButtonBottom + space.s;

  return (
    <Box
      flex={1}
      flexGrow={1}
      backgroundColor="background-basic-color-1"
      pb={paddingBottom}
    >
      <TopNavigation
        mt="m"
        zIndex={1}
        position="absolute"
        accessoryLeft={<ArrowBackIcon onPress={goBack} blurTint={blurTint} />}
      />
      <ScrollView stickyHeaderIndices={[2]}>
        <ImageAndBlurredBackground cover={cover} />
        <BookInfo {...book} />
      </ScrollView>
    </Box>
  );
};

export { BookDetail };
