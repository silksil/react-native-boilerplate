import React from "react";
import { ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LayoutBottomAndTopNavigation } from "@layouts/LayoutBottomAndTopNavigation";
import { ArrowBackIcon } from "@components/ArrowBackIcon";
import { DetailInfoItem } from "@containers/DetailInfoItem";
import { ImageAndBlurredBackground } from "@containers/ImageAndBlurredBackground";

const Item = () => {
  const {
    params: { book },
  } = useRoute();
  const { cover } = book;
  const { goBack } = useNavigation();

  return (
    <LayoutBottomAndTopNavigation
      accessoryLeft={<ArrowBackIcon onPress={goBack} />}
    >
      <ScrollView stickyHeaderIndices={[2]}>
        <ImageAndBlurredBackground cover={cover} />
        <DetailInfoItem {...book} />
      </ScrollView>
    </LayoutBottomAndTopNavigation>
  );
};

export { Item };
