import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Icon } from "@components/Icon";
import { IconButton } from "@components/buttons";
import { Divider } from "@components/Divider";

import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components/native";

const HeartIcon = ({ isAdded }) => {
  // const color = isAdded ? "red" : "grey";
  return <Icon color="color-danger-default" size="s" name="heart" />;
};

const AddedIcon = props => (
  <Box
    zIndex="1"
    backgroundColor="background-success-color-default"
    borderRadius="xl"
    {...props}
  >
    <Icon
      zIndex="1"
      borderRadius="m"
      name="checkmark-outline"
      size="s"
      color="icon-success-contrast-alternative-color"
    />
  </Box>
);

const QuoteCard = ({
  text,
  likes,
  isAdded: isAddedStateFromEditor,
  onPress,
  ...props
}) => {
  /**
   * Can take a few milli seconds before the 'isAdded' state
   * from the editor is passed to a quote card.
   * Therefore, an isAdded state is created in quoteCard that directly toggles on clicking.
   * useEffect waits for prop 'isAddedStateFromEditor` to keep the the text in the editor
   * as source of truth.
   */
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(isAddedStateFromEditor);
  }, [isAddedStateFromEditor]);

  const { space } = useTheme();
  const iconName = isAdded ? "trash-2-outline" : "plus-outline";

  return (
    <Box
      backgroundColor={{
        light: "background-basic-color-1",
        dark: "background-basic-color-2",
      }}
      boxShadow={{ light: "basic.s" }}
      py="s"
      pl="xl"
      pr="m"
      borderRadius="s"
      position="relative"
      {...props}
    >
      {isAdded && <AddedIcon position="absolute" right={-8} top={-2} />}
      <Box flexDirection="row" position="relative">
        <Text
          category="h6"
          position="absolute"
          left={-space.l}
          color="text-hint-color"
        >
          ❝
        </Text>
        <Text fontStyle="italic">{text}</Text>
      </Box>
      <Divider my="s" />
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flexDirection="row" alignItems="center">
          <HeartIcon isAdded={isAdded} />
          <Text ml="s">{likes === null ? "0" : likes}</Text>
        </Box>
        <IconButton
          borderRadius="xl"
          backgroundColor="background-secondary-color-default"
          padding="xs"
          onPress={() => {
            setIsAdded(prevState => !prevState);
            onPress();
          }}
        >
          <Icon
            name={iconName}
            color="icon-secondary-contrast-color"
            size="m"
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export { QuoteCard };
