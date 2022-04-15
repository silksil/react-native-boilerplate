import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Box } from "@components/Box";
import { Image } from "@components/Image";
import { Text } from "@components/Text";

const ListItem = ({
  title,
  subtitle,
  accessoryBottom,
  imgSrc,
  onPress,
  ItemSeparatorComponent,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Box {...props} flexDirection="row">
      {imgSrc && (
        <Image
          width={54}
          height="80px"
          borderRadius="s"
          source={{ uri: imgSrc }}
          boxShadow={{ light: "backgroundBasic.s" }}
        />
      )}
      <Box
        ml="m"
        flexGrow={1}
        flex={1}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box>
          {title && (
            <Text numberOfLines={2} ellipsizeMode="tail">
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              category="s1"
              appearance="hint"
            >
              {subtitle}
            </Text>
          )}
          {accessoryBottom && accessoryBottom}
        </Box>
        {ItemSeparatorComponent && <ItemSeparatorComponent />}
      </Box>
    </Box>
  </TouchableWithoutFeedback>
);

export default ListItem;
