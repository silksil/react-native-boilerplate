import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Icon } from "@components/Icon";
import { Uploads as UserUploads } from "@containers/Uploads";
import { LayoutBottomAndTopNavigation } from "@layouts/LayoutBottomAndTopNavigation";

function Uploads() {
  const { navigate } = useNavigation();

  return (
    <LayoutBottomAndTopNavigation
      title="Uploads"
      accessoryRight={
        <Icon name="search" onPress={() => navigate("SearchUploads")} />
      }
    >
      <UserUploads />
    </LayoutBottomAndTopNavigation>
  );
}

export { Uploads };
