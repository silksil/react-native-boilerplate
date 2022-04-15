import React from "react";

import { ScrollView } from "react-native";
import { Box } from "../Box";
import { Text } from "../Text";

import { useNavigation, useRoute } from "@react-navigation/native";
import { IconButton } from "../buttons";
import { useEditor } from "@providers/EditorProvider";
import { Icon } from "@components/Icon";
import { css } from "styled-components/native";

const ToolBarButton = ({
  text,
  fontWeight,
  fontStyle,
  textDecorationLine,
  children,
  onPress,
}) => (
  <Box
    borderRightColor="background-basic-color-3"
    borderRightWidth={1}
    borderRightHeight={10}
  >
    <IconButton
      height="100%"
      minWidth={40}
      onPress={onPress}
      backgroundColor="background-basic-color-2"
    >
      {text && (
        <Text
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          textDecorationLine={textDecorationLine}
        >
          {text}
        </Text>
      )}
      {children && children}
    </IconButton>
  </Box>
);
const ToolBar = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const bookId = params?.params?.bookId;
  const { format, dismissWebviewKeyboard } = useEditor();

  const { ACTION, BLOCK_ELEMENT, MARK_TYPE } = {
    ACTION: {
      CREATE_BLOCK: "create-block",
      MARK: "mark",
      UNDO: "undo",
      REDO: "redo",
    },
    BLOCK_ELEMENT: {
      QUOTE: "quote",
      CHAPTER_TITLE: "chapter-title",
      PARAGRAPH: "paragraph",
      HEADING_ONE: "heading-one",
      HEADING_TWO: "heading-two",
      HEADING_THREE: "heading-three",
      BULLETED_LIST: "bulleted-list",
    },
    MARK_TYPE: {
      BOLD: "bold",
      ITALIC: "italic",
      UNDERLINE: "underline",
    },
  };

  return (
    <Box
      height="40px"
      backgroundColor="background-basic-color-2"
      css={css({
        shadowRadius: 1.5,
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        shadowColor: "grey",
        elevation: 2,
      })}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <ToolBarButton
          fontWeight="bold"
          text="❝"
          onPress={() => {
            dismissWebviewKeyboard();
            navigate("Quotes", bookId);
          }}
        />
        <ToolBarButton
          text="P"
          onPress={() => {
            format(ACTION.CREATE_BLOCK, BLOCK_ELEMENT.PARAGRAPH);
          }}
        />
        <ToolBarButton
          text="H1"
          fontWeight="bold"
          onPress={() => {
            format(ACTION.CREATE_BLOCK, BLOCK_ELEMENT.HEADING_ONE);
          }}
        />
        <ToolBarButton
          text="H2"
          fontWeight="bold"
          onPress={() => {
            format(ACTION.CREATE_BLOCK, BLOCK_ELEMENT.HEADING_TWO);
          }}
        />
        <ToolBarButton
          text="H3"
          fontWeight="bold"
          onPress={() => {
            format(ACTION.CREATE_BLOCK, BLOCK_ELEMENT.HEADING_THREE);
          }}
        />
        <ToolBarButton
          iconName="list-outline"
          onPress={() => {
            format(ACTION.CREATE_BLOCK, BLOCK_ELEMENT.BULLETED_LIST);
          }}
        >
          <Icon name="list-outline" />
        </ToolBarButton>
        <ToolBarButton
          text="B"
          fontWeight="bold"
          onPress={() => {
            format(ACTION.MARK, MARK_TYPE.BOLD);
          }}
        />
        <ToolBarButton
          text="I"
          fontStyle="italic"
          onPress={() => {
            format(ACTION.MARK, MARK_TYPE.ITALIC);
          }}
        />
        <ToolBarButton
          text="U"
          textDecorationLine="underline"
          onPress={() => {
            format(ACTION.MARK, MARK_TYPE.UNDERLINE);
          }}
        />
        <ToolBarButton
          onPress={() => {
            format(ACTION.UNDO);
          }}
        >
          <Icon name="corner-up-left-outline" />
        </ToolBarButton>
        <ToolBarButton
          onPress={() => {
            format(ACTION.REDO);
          }}
        >
          <Icon name="corner-up-right-outline" />
        </ToolBarButton>
      </ScrollView>
    </Box>
  );
};

export { ToolBar };
