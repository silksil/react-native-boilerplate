import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useWindowDimensions, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useTheme } from "styled-components";

import { Box } from "@components/Box";
import { TopNavigation } from "@layouts/TopNavigation";
import { Loading } from "@components/Loading";
import { ErrorMessage } from "@components/ErrorMessage";
import { Button } from "@components/buttons";
import { Text } from "@components/Text";
import { BookCard } from "@components/cards";
import { Icon } from "@components/Icon";

function Uploads() {
  const { navigate } = useNavigation();
  const loading = false;
  const error = false;
  // const notes = data?.me?.notes;

  // const showNotes = data?.me?.notes && notes.length > 0;

  const notes = [
    {
      book: {
        title: "piepo",
      },
    },
  ];
  const showNotes = true;
  const lastOpenedNote = notes && notes[0];

  /**
   * Styling variables
   */
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

  return (
    <>
      {loading && (
        <Box flex={1} justifyContent="center" mb={bottomNavigationHeight}>
          <Loading />
        </Box>
      )}
      {error && (
        <ErrorMessage
          flex={1}
          justifyContent="center"
          mb={bottomNavigationHeight}
        />
      )}
      {showNotes && (
        <ScrollView>
          {/* <LastOpenedNote note={lastOpenedNote} /> */}
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
              onPress={() => navigate("SearchUploads", { notes })}
            >
              See all
            </Button>
          </Box>
          <Carousel
            inactiveSlideOpacity={1}
            enableSnap={false}
            data={notes}
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
                onPress={() => {
                  navigate("EditorStack", {
                    screen: "Editor",
                    params: {
                      noteId: item.id,
                      bookId: item.book.id,
                      bookTitle: item.book.title,
                    },
                  });
                }}
              />
            )}
            inactiveSlideScale={100}
            activeSlideAlignment="start"
          />
        </ScrollView>
      )}
    </>
  );
}

export { Uploads };
