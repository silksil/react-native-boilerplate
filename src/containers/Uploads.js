import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useTheme } from "styled-components";

import { Box } from "@components/Box";
import { Loading } from "@components/Loading";
import { ErrorMessage } from "@components/ErrorMessage";
import { Button } from "@components/buttons";
import { Text } from "@components/Text";
import { BookCard } from "@components/cards";
import { books } from "../mockData";

function Uploads() {
  const { navigate } = useNavigation();
  const loading = false;
  const error = false;

  // Styling variables
  const {
    bookCoverHeightToWidthRatio,
    space,
    bottomNavigationHeight,
  } = useTheme();
  const windowWidth = useWindowDimensions().width;
  const SLIDER_HEIGHT = 200;
  const ITEM_HEIGHT = SLIDER_HEIGHT;
  const IMAGE_HEIGHT = SLIDER_HEIGHT * 0.78;
  const ITEM_WIDTH = IMAGE_HEIGHT * bookCoverHeightToWidthRatio;
  const ITEM_WIDTH_WITH_SPACING = ITEM_WIDTH + space.m;

  if (loading)
    return (
      <Box flex={1} justifyContent="center" mb={bottomNavigationHeight}>
        <Loading />
      </Box>
    );

  if (error)
    return (
      <ErrorMessage
        flex={1}
        justifyContent="center"
        mb={bottomNavigationHeight}
      />
    );

  return (
    <>
      <ScrollView>
        <Box
          mx="m"
          flexDirection="row"
          mb="s"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text category="h4">Recent notes</Text>
          <Button
            borderRadius="xl"
            size="tiny"
            status="basic"
            onPress={() => navigate("SearchUploads", { books })}
          >
            See all
          </Button>
        </Box>
        <Carousel
          enableSnap={false}
          data={books}
          sliderWidth={windowWidth}
          itemWidth={ITEM_WIDTH_WITH_SPACING}
          removeClippedSubviews={false}
          renderItem={({ index, item }) => (
            <BookCard
              ml="m"
              width={ITEM_WIDTH}
              index={index}
              imgHeight={IMAGE_HEIGHT}
              imgWidth={ITEM_WIDTH}
              height={`${ITEM_HEIGHT}px`}
              title={item.book.title}
              author={item.book.author?.name}
              imgSrc={item.book.cover}
            />
          )}
          inactiveSlideScale={100}
          activeSlideAlignment="start"
        />
      </ScrollView>
    </>
  );
}

export { Uploads };
