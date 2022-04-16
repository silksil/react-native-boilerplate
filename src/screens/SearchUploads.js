import React from "react";
import { Icon } from "@components/Icon";
import { SearchUploads as SearchUploadsContainer } from "@containers/SearchUploads";
import { LayoutBottomAndTopNavigation } from "@layouts/LayoutBottomAndTopNavigation";
import { useNavigation } from "@react-navigation/native";

function SearchUploads() {
  const { goBack } = useNavigation();

  return (
    <LayoutBottomAndTopNavigation
      title="All uploads"
      accessoryLeft={
        <Icon name="arrow-back-outline" onPress={() => goBack()} />
      }
    >
      <SearchUploadsContainer />
    </LayoutBottomAndTopNavigation>
  );
}

export { SearchUploads };
