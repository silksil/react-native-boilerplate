import { Image } from "@components/Image";

import { Box } from "@components/Box";

import { shape, string } from "prop-types";
import * as React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Text } from "@components/Text";

const BookCard = ({
  title,
  author,
  imgSrc,
  imgHeight,
  imgWidth,
  styling,
  onPress,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        borderRadius="s"
        backgroundColor={{
          light: "background-basic-color-1",
          dark: "background-basic-color-2",
        }}
        {...props}
      >
        <Image
          boxShadow={{ dark: "basic.m", light: "basic.s" }}
          width={imgWidth}
          height={imgHeight}
          borderRadius="s"
          source={{
            uri: imgSrc,
          }}
        />
        <Text mx="xs" mt="s" numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text
          mx="xs"
          numberOfLines={1}
          ellipsizeMode="tail"
          fontWeight="lighter"
        >
          {author}
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

Box.propTypes = {
  title: string,
  imgSrc: string,
  imgHeight: string,
  styling: shape(),
};

Box.defaultProps = {
  title: null,
  imgSrc: null,
  imgHeight: "300px",
  styling: {},
};

export { BookCard };
