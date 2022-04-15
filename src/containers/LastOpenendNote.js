import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "@components/Text";
import { Box } from "@components/Box";
import { Button } from "@components/buttons/Button";
import { HorizontalCard } from "@components/cards";

const LastOpenedNote = ({ note }) => {
  const { navigate } = useNavigation();

  if (!note)
    return (
      <Box
        mx="m"
        backgroundColor="background-secondary-color-default"
        borderRadius="s"
        p="xl"
      >
        <Text
          textAlign="center"
          category="h6"
          color="text-secondary-contrast-color"
        >
          You don't have any notes yet. Start making your your first note.
        </Text>
        <Button mt="m" onPress={() => navigate("Search")}>
          Make Note
        </Button>
      </Box>
    );

  const authors = "jo";

  return (
    <>
      <Text ml="m" category="h4">
        Last note
      </Text>
      <HorizontalCard
        mx="m"
        mt="s"
        mb="l"
        borderRadius="s"
        boxShadow={{
          light: "backgroundBasic.m",
          dark: "backgroundBasic.s",
        }}
        title={note?.book?.title}
        subtitle={`by ${authors}`}
        callToAction="Open"
        imgSrc={note?.book?.cover}
        onPress={() => {
          navigate("EditorStack", {
            screen: "Editor",
            params: {
              noteId: note?.id,
              bookId: note?.book?.id,
              bookTitle: note?.book?.title,
            },
          });
        }}
      />
    </>
  );
};

export { LastOpenedNote };
