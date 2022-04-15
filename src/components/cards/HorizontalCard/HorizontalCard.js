import React from "react";
import * as S from "./styled";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components";
import { Text } from "@components/Text";
import { Icon } from "@components/Icon";
const ArrowIcon = (...props) => (
  <Icon
    {...props}
    color="icon-secondary-contrast-color"
    size="m"
    name="arrow-forward-outline"
  />
);

const HorizontalCard = ({
  title,
  subtitle,
  callToAction,
  imgSrc,
  width,
  onPress,
  ...props
}) => {
  const { bookCoverHeightToWidthRatio } = useTheme();

  const imageHeight = 130;
  const imageWidth = imageHeight * bookCoverHeightToWidthRatio;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <S.Box p="l" {...props} flexGrow={1}>
        <S.TextBox>
          <Text
            color="text-secondary-contrast-color"
            numberOfLines={2}
            ellipsizeMode="tail"
            category="h4"
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              color="text-secondary-contrast-color"
              fontWeight="lighter"
              category="h6"
              mt="s"
              mb="l"
            >
              {subtitle}
            </Text>
          )}
          {callToAction && (
            <S.CallToActionBox>
              <Text color="text-secondary-contrast-color" category="h6">
                {callToAction && callToAction}
              </Text>
              <ArrowIcon />
            </S.CallToActionBox>
          )}
        </S.TextBox>
        {imgSrc && (
          <S.Image
            height={imageHeight}
            width={imageWidth}
            borderRadius="s"
            boxShadow={{ dark: "basic.m", light: "basic.m" }}
            source={{ uri: imgSrc }}
          />
        )}
      </S.Box>
    </TouchableWithoutFeedback>
  );
};

export { HorizontalCard };
